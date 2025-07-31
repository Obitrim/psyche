# Authentication System

This directory contains the authentication system for the Psyche Hub backend API.

## Overview

The authentication system provides JWT-based authentication with the following features:

- User registration (signup)
- User login
- Token refresh
- User logout
- Protected route middleware
- Current user retrieval

## Files

- `auth.controller.ts` - HTTP request handlers
- `auth.service.ts` - Business logic for authentication
- `auth.router.ts` - Express router with OpenAPI documentation
- `auth.type.ts` - TypeScript types and Zod schemas
- `authMiddleware.ts` - JWT token verification middleware

## API Endpoints

### POST `/api/auth/signup`

Register a new user account.

**Request Body:**

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "securepassword123",
  "phone": "+1234567890"
}
```

**Response:**

```json
{
  "success": true,
  "message": "User registered successfully",
  "data": {
    "user": {
      "id": "uuid",
      "name": "John Doe",
      "email": "john@example.com",
      "phone": "+1234567890",
      "created_at": "2024-01-01T00:00:00Z",
      "updated_at": "2024-01-01T00:00:00Z"
    },
    "token": "jwt-access-token"
  },
  "statusCode": 201
}
```

### POST `/api/auth/login`

Authenticate a user and receive access token.

**Request Body:**

```json
{
  "email": "john@example.com",
  "password": "securepassword123"
}
```

**Response:**

```json
{
  "success": true,
  "message": "Login successful",
  "data": {
    "user": {
      "id": "uuid",
      "name": "John Doe",
      "email": "john@example.com",
      "phone": "+1234567890",
      "created_at": "2024-01-01T00:00:00Z",
      "updated_at": "2024-01-01T00:00:00Z"
    },
    "token": "jwt-access-token"
  },
  "statusCode": 200
}
```

### POST `/api/auth/refresh`

Refresh an expired access token using a refresh token.

**Request Body:**

```json
{
  "refreshToken": "jwt-refresh-token"
}
```

**Response:**

```json
{
  "success": true,
  "message": "Token refreshed successfully",
  "data": {
    "token": "new-jwt-access-token"
  },
  "statusCode": 200
}
```

### POST `/api/auth/logout`

Logout a user by invalidating their refresh token.

**Request Body:**

```json
{
  "refreshToken": "jwt-refresh-token"
}
```

**Response:**

```json
{
  "success": true,
  "message": "Logged out successfully",
  "data": null,
  "statusCode": 200
}
```

### GET `/api/auth/me`

Get the current authenticated user's information.

**Headers:**

```
Authorization: Bearer jwt-access-token
```

**Response:**

```json
{
  "success": true,
  "message": "Current user retrieved successfully",
  "data": {
    "user": {
      "id": "uuid",
      "name": "John Doe",
      "email": "john@example.com",
      "phone": "+1234567890",
      "created_at": "2024-01-01T00:00:00Z",
      "updated_at": "2024-01-01T00:00:00Z"
    }
  },
  "statusCode": 200
}
```

## Middleware

### `authenticateToken`

Protects routes by verifying JWT tokens. Adds user information to the request object.

**Usage:**

```typescript
import { authenticateToken } from "@/api/auth/authMiddleware";

// Protected route
app.get("/protected", authenticateToken, (req, res) => {
  // req.user contains { userId: string, email: string }
});
```

### `optionalAuth`

Optional authentication that doesn't fail if no token is provided.

**Usage:**

```typescript
import { optionalAuth } from "@/api/auth/authMiddleware";

// Optional protected route
app.get("/optional", optionalAuth, (req, res) => {
  // req.user may be undefined if no valid token
});
```

## Environment Variables

Add these to your `.env` file:

```env
JWT_SECRET=your-super-secret-jwt-key
JWT_REFRESH_SECRET=your-super-secret-refresh-key
```

## Dependencies

Install required packages:

```bash
pnpm add bcryptjs jsonwebtoken
pnpm add -D @types/bcryptjs @types/jsonwebtoken
```

## Database Schema Updates

To enable password authentication, you'll need to add a password field to your `psychologists` table:

```sql
ALTER TABLE psychologists ADD COLUMN password VARCHAR(255);
```

Or update your Prisma schema:

```prisma
model psychologists {
  id         String     @id @default(dbgenerated("gen_random_uuid()")) @db.Uuid
  name       String
  email      String     @unique
  phone      String?
  password   String?    // Add this field
  created_at DateTime?  @default(now()) @db.Timestamptz(6)
  updated_at DateTime?  @default(now()) @db.Timestamptz(6)
  articles   articles[]
}
```

Then uncomment the password-related code in `auth.service.ts`.

## Security Notes

1. **Password Hashing**: Passwords are hashed using bcrypt with 12 salt rounds
2. **JWT Tokens**: Access tokens expire in 1 hour, refresh tokens in 7 days
3. **Token Storage**: Refresh tokens should be stored in a separate table for proper invalidation
4. **Rate Limiting**: Consider adding rate limiting to auth endpoints
5. **CORS**: Ensure proper CORS configuration for your frontend domain

## Error Handling

All endpoints return consistent error responses:

```json
{
  "success": false,
  "message": "Error description",
  "data": null,
  "statusCode": 400
}
```

Common status codes:

- `200` - Success
- `201` - Created (signup)
- `400` - Bad Request
- `401` - Unauthorized
- `404` - Not Found
- `409` - Conflict (email already exists)
- `500` - Internal Server Error
