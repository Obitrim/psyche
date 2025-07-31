import type { Request, Response, NextFunction } from "express";
import { StatusCodes } from "http-status-codes";

import { ServiceResponse } from "@/common/models/serviceResponse";
import { authService } from "./auth.service";

// Extend Express Request interface to include user
declare global {
  namespace Express {
    interface Request {
      user?: {
        userId: string;
        email: string;
      };
    }
  }
}

export const authenticateToken = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1]; // Bearer TOKEN

  if (!token) {
    const response = ServiceResponse.failure(
      "Access token required",
      null,
      StatusCodes.UNAUTHORIZED
    );
    res.status(response.statusCode).json(response);
    return;
  }

  try {
    const decoded = authService.verifyToken(token);
    if (!decoded) {
      const response = ServiceResponse.failure(
        "Invalid or expired token",
        null,
        StatusCodes.UNAUTHORIZED
      );
      res.status(response.statusCode).json(response);
      return;
    }

    // Add user info to request object
    req.user = decoded;
    next();
  } catch (error) {
    const response = ServiceResponse.failure(
      "Token verification failed",
      null,
      StatusCodes.UNAUTHORIZED
    );
    res.status(response.statusCode).json(response);
  }
};

export const optionalAuth = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (token) {
    try {
      const decoded = authService.verifyToken(token);
      if (decoded) {
        req.user = decoded;
      }
    } catch (error) {
      // Silently fail for optional auth
    }
  }

  next();
};
