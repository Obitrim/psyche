import { z } from "zod";

// Base user schema for auth responses
export const AuthUserSchema = z.object({
  id: z.string().uuid(),
  name: z.string(),
  email: z.string().email(),
  phone: z.string().optional(),
  created_at: z.date().optional(),
  updated_at: z.date().optional(),
});

// Login request schema
export const LoginRequestSchema = z.object({
  body: z.object({
    email: z.string().email(),
    password: z.string().min(6),
  }),
});

// Signup request schema
export const SignupRequestSchema = z.object({
  body: z.object({
    name: z.string().min(2),
    email: z.string().email(),
    password: z.string().min(6),
    phone: z.string().optional(),
  }),
});

// Auth response schema
export const AuthResponseSchema = z.object({
  user: AuthUserSchema,
  token: z.string(),
});

// Refresh token request schema
export const RefreshTokenRequestSchema = z.object({
  body: z.object({
    refreshToken: z.string(),
  }),
});

// Logout request schema
export const LogoutRequestSchema = z.object({
  body: z.object({
    refreshToken: z.string(),
  }),
});

// Type exports
export type AuthUser = z.infer<typeof AuthUserSchema>;
export type LoginRequest = z.infer<typeof LoginRequestSchema>;
export type SignupRequest = z.infer<typeof SignupRequestSchema>;
export type AuthResponse = z.infer<typeof AuthResponseSchema>;
export type RefreshTokenRequest = z.infer<typeof RefreshTokenRequestSchema>;
export type LogoutRequest = z.infer<typeof LogoutRequestSchema>;

// DTO types for internal use
export type LoginDto = {
  email: string;
  password: string;
};

export type SignupDto = {
  name: string;
  email: string;
  password: string;
  phone?: string;
};

export type RefreshTokenDto = {
  refreshToken: string;
};
