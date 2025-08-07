import express, { Router } from "express";

import { OpenAPIRegistry } from "@asteasolutions/zod-to-openapi";
import { createApiResponse } from "@/api-docs/openAPIResponseBuilders";
import { z } from "zod";
import { validateRequest } from "@/common/utils/httpHandlers";
import { CreateTagDtoSchema } from "./tags.type";
import { TagsController } from "./tags.controller";

const tagsRegistry = new OpenAPIRegistry();
const tagsRouter: Router = express.Router();

/**
 * Handles GET requests to the root of the tags endpoint.
 *
 * @param req - The Express request object.
 * @param res - The Express response object.
 */
tagsRegistry.registerPath({
  method: "get",
  path: "/api/tags",
  tags: ["tags", "get tags"],
  responses: createApiResponse(z.object({}), "Success"),
});
tagsRouter.get("/", TagsController.getTags);

/**
 * Handles POST requests to create category
 *
 * @param req - The Express request object.
 * @param res - The Express response object.
 */
tagsRegistry.registerPath({
  method: "post",
  path: "/api/tags",
  tags: ["tags", "create category"],
  responses: createApiResponse(z.object({}), "Success"),
});
tagsRouter.post(
  "/",
  validateRequest(CreateTagDtoSchema),
  TagsController.createTag
);

export { tagsRouter, tagsRegistry };
