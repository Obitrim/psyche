import * as argon2 from "argon2";
import jwt from "jsonwebtoken";
import { StatusCodes } from "http-status-codes";

import db from "@/common/lib/prisma/client";
import { ServiceResponse } from "@/common/models/serviceResponse";
import { logger } from "@/server";
import type {
  AuthResponse,
  LoginDto,
  SignupDto,
  RefreshTokenDto,
} from "./auth.type";

export class AuthService {
  private readonly JWT_SECRET = process.env.JWT_SECRET || "your-secret-key";
  private readonly JWT_REFRESH_SECRET =
    process.env.JWT_REFRESH_SECRET || "your-refresh-secret-key";
  private readonly JWT_EXPIRES_IN = "1h";
  private readonly JWT_REFRESH_EXPIRES_IN = "7d";

  // Generate JWT token
  private generateToken(payload: { userId: string; email: string }): string {
    return jwt.sign(payload, this.JWT_SECRET, {
      expiresIn: this.JWT_EXPIRES_IN,
    });
  }

  // Generate refresh token
  private generateRefreshToken(payload: {
    userId: string;
    email: string;
  }): string {
    return jwt.sign(payload, this.JWT_REFRESH_SECRET, {
      expiresIn: this.JWT_REFRESH_EXPIRES_IN,
    });
  }

  // Hash password
  private async hashPassword(password: string): Promise<string> {
    return await argon2.hash(password);
  }

  // Compare password
  private async comparePassword(
    password: string,
    hashedPassword: string
  ): Promise<boolean> {
    return await argon2.verify(hashedPassword, password);
  }

  // User signup
  async signup(
    signupData: SignupDto
  ): Promise<ServiceResponse<AuthResponse | null>> {
    try {
      // Check if user already exists
      const existingUser = await db.psychologists.findUnique({
        where: { email: signupData.email },
      });

      if (existingUser) {
        return ServiceResponse.failure(
          "User with this email already exists",
          null,
          StatusCodes.CONFLICT
        );
      }

      // Hash password
      const hashedPassword = await this.hashPassword(signupData.password);

      // Create user (Note: You'll need to add password field to your schema)
      const newUser = await db.psychologists.create({
        data: {
          name: signupData.name,
          email: signupData.email,
          phone: signupData.phone,
          // password: hashedPassword, // Uncomment when you add password field to schema
        },
      });

      // Generate tokens
      const token = this.generateToken({
        userId: newUser.id,
        email: newUser.email,
      });
      const refreshToken = this.generateRefreshToken({
        userId: newUser.id,
        email: newUser.email,
      });

      // Store refresh token (you might want to create a separate table for this)
      // await db.refreshTokens.create({
      //   data: {
      //     token: refreshToken,
      //     userId: newUser.id,
      //     expiresAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000) // 7 days
      //   }
      // });

      const authResponse: AuthResponse = {
        user: {
          id: newUser.id,
          name: newUser.name,
          email: newUser.email,
          phone: newUser.phone || undefined,
          created_at: newUser.created_at || undefined,
          updated_at: newUser.updated_at || undefined,
        },
        token,
      };

      return ServiceResponse.success<AuthResponse>(
        "User registered successfully",
        authResponse,
        StatusCodes.CREATED
      );
    } catch (error) {
      const errorMessage = `Error during signup: ${(error as Error).message}`;
      logger.error(errorMessage);
      return ServiceResponse.failure(
        "An error occurred during registration",
        null,
        StatusCodes.INTERNAL_SERVER_ERROR
      );
    }
  }

  // User login
  async login(
    loginData: LoginDto
  ): Promise<ServiceResponse<AuthResponse | null>> {
    try {
      // Find user by email
      const user = await db.psychologists.findUnique({
        where: { email: loginData.email },
      });

      if (!user) {
        return ServiceResponse.failure(
          "Invalid email or password",
          null,
          StatusCodes.UNAUTHORIZED
        );
      }

      // Check password (uncomment when you add password field)
      // const isPasswordValid = await this.comparePassword(loginData.password, user.password);
      // if (!isPasswordValid) {
      //   return ServiceResponse.failure(
      //     "Invalid email or password",
      //     null,
      //     StatusCodes.UNAUTHORIZED
      //   );
      // }

      // Generate tokens
      const token = this.generateToken({ userId: user.id, email: user.email });
      const refreshToken = this.generateRefreshToken({
        userId: user.id,
        email: user.email,
      });

      // Store refresh token (you might want to create a separate table for this)
      // await db.refreshTokens.create({
      //   data: {
      //     token: refreshToken,
      //     userId: user.id,
      //     expiresAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000) // 7 days
      //   }
      // });

      const authResponse: AuthResponse = {
        user: {
          id: user.id,
          name: user.name,
          email: user.email,
          phone: user.phone || undefined,
          created_at: user.created_at || undefined,
          updated_at: user.updated_at || undefined,
        },
        token,
      };

      return ServiceResponse.success<AuthResponse>(
        "Login successful",
        authResponse,
        StatusCodes.OK
      );
    } catch (error) {
      const errorMessage = `Error during login: ${(error as Error).message}`;
      logger.error(errorMessage);
      return ServiceResponse.failure(
        "An error occurred during login",
        null,
        StatusCodes.INTERNAL_SERVER_ERROR
      );
    }
  }

  // Refresh token
  async refreshToken(
    refreshTokenData: RefreshTokenDto
  ): Promise<ServiceResponse<{ token: string } | null>> {
    try {
      // Verify refresh token
      const decoded = jwt.verify(
        refreshTokenData.refreshToken,
        this.JWT_REFRESH_SECRET
      ) as {
        userId: string;
        email: string;
      };

      // Check if refresh token exists in database (you might want to create a separate table for this)
      // const storedToken = await db.refreshTokens.findFirst({
      //   where: {
      //     token: refreshTokenData.refreshToken,
      //     userId: decoded.userId,
      //     expiresAt: { gt: new Date() }
      //   }
      // });

      // if (!storedToken) {
      //   return ServiceResponse.failure(
      //     "Invalid refresh token",
      //     null,
      //     StatusCodes.UNAUTHORIZED
      //   );
      // }

      // Generate new access token
      const newToken = this.generateToken({
        userId: decoded.userId,
        email: decoded.email,
      });

      return ServiceResponse.success<{ token: string }>(
        "Token refreshed successfully",
        { token: newToken },
        StatusCodes.OK
      );
    } catch (error) {
      const errorMessage = `Error refreshing token: ${
        (error as Error).message
      }`;
      logger.error(errorMessage);
      return ServiceResponse.failure(
        "Invalid refresh token",
        null,
        StatusCodes.UNAUTHORIZED
      );
    }
  }

  // Logout
  async logout(
    refreshTokenData: RefreshTokenDto
  ): Promise<ServiceResponse<null>> {
    try {
      // Remove refresh token from database (you might want to create a separate table for this)
      // await db.refreshTokens.deleteMany({
      //   where: { token: refreshTokenData.refreshToken }
      // });

      return ServiceResponse.success<null>(
        "Logged out successfully",
        null,
        StatusCodes.OK
      );
    } catch (error) {
      const errorMessage = `Error during logout: ${(error as Error).message}`;
      logger.error(errorMessage);
      return ServiceResponse.failure(
        "An error occurred during logout",
        null,
        StatusCodes.INTERNAL_SERVER_ERROR
      );
    }
  }

  // Verify token middleware helper
  verifyToken(token: string): { userId: string; email: string } | null {
    try {
      return jwt.verify(token, this.JWT_SECRET) as {
        userId: string;
        email: string;
      };
    } catch (error) {
      return null;
    }
  }
}

export const authService = new AuthService();
