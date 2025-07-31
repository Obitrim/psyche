import { createApiResponse } from "@/api-docs/openAPIResponseBuilders";
import { OpenAPIRegistry } from "@asteasolutions/zod-to-openapi";
import express from "express";
import { z } from "zod";

import { authController } from "./auth.controller";

import {
  LoginRequestSchema,
  SignupRequestSchema,
  RefreshTokenRequestSchema,
  LogoutRequestSchema,
  AuthResponseSchema,
} from "./auth.type";
import { authenticateToken } from "./auth.middleware";

const authRegistry = new OpenAPIRegistry();
const authRouter = express.Router();

/**
 * Signup
 */
authRegistry.registerPath({
  method: "post",
  path: "/api/auth/signup",
  tags: ["auth"],
  request: {
    body: {
      content: {
        "application/json": {
          schema: SignupRequestSchema.shape.body,
        },
      },
    },
  },
  responses: createApiResponse(
    AuthResponseSchema,
    "User registered successfully"
  ),
});
authRouter.post("/signup", authController.signup);

/**
 * Login
 */
authRegistry.registerPath({
  method: "post",
  path: "/api/auth/login",
  tags: ["auth"],
  request: {
    body: {
      content: {
        "application/json": {
          schema: LoginRequestSchema.shape.body,
        },
      },
    },
  },
  responses: createApiResponse(AuthResponseSchema, "Login successful"),
});
authRouter.post("/login", authController.login);

/**
 * Refresh Token
 */
authRegistry.registerPath({
  method: "post",
  path: "/api/auth/refresh",
  tags: ["auth"],
  request: {
    body: {
      content: {
        "application/json": {
          schema: RefreshTokenRequestSchema.shape.body,
        },
      },
    },
  },
  responses: createApiResponse(
    z.object({
      token: z.string(),
    }),
    "Token refreshed successfully"
  ),
});
authRouter.post("/refresh", authController.refreshToken);

/**
 * Logout
 */
authRegistry.registerPath({
  method: "post",
  path: "/api/auth/logout",
  tags: ["auth"],
  request: {
    body: {
      content: {
        "application/json": {
          schema: LogoutRequestSchema.shape.body,
        },
      },
    },
  },
  responses: createApiResponse(z.object({}), "Logged out successfully"),
});
authRouter.post("/logout", authController.logout);

/**
 * Get Current User
 */
authRegistry.registerPath({
  method: "get",
  path: "/api/auth/me",
  tags: ["auth"],
  responses: createApiResponse(
    z.object({
      user: z.object({
        id: z.string().uuid(),
        name: z.string(),
        email: z.string().email(),
      }),
    }),
    "Current user retrieved successfully"
  ),
});
authRouter.get("/me", authenticateToken, authController.getCurrentUser);

export { authRouter, authRegistry };
