import express, { Router } from "express";
import { CategoriesController } from "./categories.controller";
import { OpenAPIRegistry } from "@asteasolutions/zod-to-openapi";
import { createApiResponse } from "@/api-docs/openAPIResponseBuilders";
import { z } from "zod";
import { validateRequest } from "@/common/utils/httpHandlers";
import { CreateCategoryDtoSchema } from "./categories.type";

const categoriesRegistry = new OpenAPIRegistry();
const categoriesRouter: Router = express.Router();

/**
 * Handles GET requests to the root of the categories endpoint.
 *
 * @param req - The Express request object.
 * @param res - The Express response object.
 */
categoriesRegistry.registerPath({
  method: "get",
  path: "/api/categories",
  tags: ["categories", "get categories"],
  responses: createApiResponse(z.object({}), "Success"),
});
categoriesRouter.get("/", CategoriesController.getCategories);

/**
 * Handles POST requests to create category
 *
 * @param req - The Express request object.
 * @param res - The Express response object.
 */
categoriesRegistry.registerPath({
  method: "post",
  path: "/api/categories",
  tags: ["categories", "create category"],
  responses: createApiResponse(z.object({}), "Success"),
});
categoriesRouter.post(
  "/",
  validateRequest(CreateCategoryDtoSchema),
  CategoriesController.createCategory
);

export { categoriesRouter, categoriesRegistry };
