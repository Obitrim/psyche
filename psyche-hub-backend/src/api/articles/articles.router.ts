import express from "express";
import { articlesController } from "./articles.controller";
import { OpenAPIRegistry } from "@asteasolutions/zod-to-openapi";
import { createApiResponse } from "@/api-docs/openAPIResponseBuilders";
import z from "zod";
import { validateRequest } from "@/common/utils/httpHandlers";
import {
  CreateArticleDtoSchema,
  DeleteArticleDtoSchema,
  FetchArticlesDtoSchema,
  GetArticleDtoSchema,
  UpdateArticleDtoSchema,
} from "./articles.type";
import uploader from "@/common/lib/multer";

const articlesRegistry = new OpenAPIRegistry();

const articlesRouter = express.Router();

/**
 * Get article list
 *
 */
articlesRegistry.registerPath({
  method: "get",
  path: "/api/articles",
  tags: ["articles"],
  responses: createApiResponse(z.array(z.object({})), "Success"),
});
articlesRouter.get(
  "/",
  validateRequest(FetchArticlesDtoSchema),
  articlesController.getArticles
);

/**
 * Create new article
 *
 */
articlesRegistry.registerPath({
  method: "post",
  path: "/api/articles",
  tags: ["articles", "create article"],
  responses: createApiResponse(z.object({}), "Success"),
});
articlesRouter.post(
  "/",
  uploader.single("cover_img"),
  validateRequest(CreateArticleDtoSchema),
  articlesController.createArticle
);

/**
 * Get article by ID
 *
 */
articlesRegistry.registerPath({
  method: "get",
  path: "/api/articles/:id",
  tags: ["articles", "get article"],
  responses: createApiResponse(z.object({}), "Success"),
});
articlesRouter.get(
  "/:id",
  validateRequest(GetArticleDtoSchema),
  articlesController.getArticle
);

/**
 * Update article by ID
 *
 */
articlesRegistry.registerPath({
  method: "put",
  path: "/api/articles/:id",
  tags: ["articles", "update article"],
  responses: createApiResponse(z.object({}), "Success"),
});
articlesRouter.put(
  "/:id",
  validateRequest(UpdateArticleDtoSchema),
  articlesController.updateArticle
);

/**
 * Delete article by ID
 *
 */
articlesRegistry.registerPath({
  method: "delete",
  path: "/api/articles/:id",
  tags: ["articles", "delete article"],
  responses: createApiResponse(z.object({}), "Success"),
});
articlesRouter.delete(
  "/:id",
  validateRequest(DeleteArticleDtoSchema),
  articlesController.deleteArticle
);

export { articlesRouter, articlesRegistry };
