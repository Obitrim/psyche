import type { Request, RequestHandler, Response } from "express";

import db from "@/common/lib/prisma/client";
import { authService } from "./auth.service";
import type { LoginDto, SignupDto, RefreshTokenDto } from "./auth.type";

class AuthController {
  // User signup
  public signup: RequestHandler = async (req: Request, res: Response) => {
    try {
      const signupData: SignupDto = req.body;
      const serviceResponse = await authService.signup(signupData);
      res.status(serviceResponse.statusCode).send(serviceResponse);
    } catch (error) {
      const errorMessage = `Error in signup controller: ${
        (error as Error).message
      }`;
      console.error(errorMessage);
      res.status(500).send({
        success: false,
        message: "Internal server error during signup",
        data: null,
        statusCode: 500,
      });
    }
  };

  // User login
  public login: RequestHandler = async (req: Request, res: Response) => {
    try {
      const loginData: LoginDto = req.body;
      const serviceResponse = await authService.login(loginData);
      res.status(serviceResponse.statusCode).send(serviceResponse);
    } catch (error) {
      const errorMessage = `Error in login controller: ${
        (error as Error).message
      }`;
      console.error(errorMessage);
      res.status(500).send({
        success: false,
        message: "Internal server error during login",
        data: null,
        statusCode: 500,
      });
    }
  };

  // Refresh token
  public refreshToken: RequestHandler = async (req: Request, res: Response) => {
    try {
      const refreshTokenData: RefreshTokenDto = req.body;
      const serviceResponse = await authService.refreshToken(refreshTokenData);
      res.status(serviceResponse.statusCode).send(serviceResponse);
    } catch (error) {
      const errorMessage = `Error in refresh token controller: ${
        (error as Error).message
      }`;
      console.error(errorMessage);
      res.status(500).send({
        success: false,
        message: "Internal server error during token refresh",
        data: null,
        statusCode: 500,
      });
    }
  };

  // Logout
  public logout: RequestHandler = async (req: Request, res: Response) => {
    try {
      const refreshTokenData: RefreshTokenDto = req.body;
      const serviceResponse = await authService.logout(refreshTokenData);
      res.status(serviceResponse.statusCode).send(serviceResponse);
    } catch (error) {
      const errorMessage = `Error in logout controller: ${
        (error as Error).message
      }`;
      console.error(errorMessage);
      res.status(500).send({
        success: false,
        message: "Internal server error during logout",
        data: null,
        statusCode: 500,
      });
    }
  };

  // Get current user (protected route)
  public getCurrentUser: RequestHandler = async (
    req: Request,
    res: Response
  ) => {
    try {
      // User info is already extracted by middleware
      if (!req.user) {
        res.status(401).send({
          success: false,
          message: "User not authenticated",
          data: null,
          statusCode: 401,
        });
        return;
      }

      // Fetch user details from database
      const user = await db.psychologists.findUnique({
        where: { id: req.user.userId },
      });

      if (!user) {
        res.status(404).send({
          success: false,
          message: "User not found",
          data: null,
          statusCode: 404,
        });
        return;
      }

      res.status(200).send({
        success: true,
        message: "Current user retrieved successfully",
        data: {
          user: {
            id: user.id,
            name: user.name,
            email: user.email,
            phone: user.phone || undefined,
            created_at: user.created_at || undefined,
            updated_at: user.updated_at || undefined,
          },
        },
        statusCode: 200,
      });
    } catch (error) {
      const errorMessage = `Error in get current user controller: ${
        (error as Error).message
      }`;
      console.error(errorMessage);
      res.status(500).send({
        success: false,
        message: "Internal server error retrieving current user",
        data: null,
        statusCode: 500,
      });
    }
  };
}

export const authController = new AuthController();
