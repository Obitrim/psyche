import imagekit from "@/common/lib/imagekit";
import { Prisma } from "@/common/lib/prisma";
import db from "@/common/lib/prisma/client";
import { ServiceResponse } from "@/common/models/serviceResponse";
import { RequestHandler } from "express";
import { StatusCodes } from "http-status-codes";

class ArticlesController {
  public getArticles: RequestHandler = async (_req, res) => {
    const { filters } = _req.query;

    try {
      const articles = await db.articles.findMany({
        where: filters
          ? (JSON.parse(filters as string) as Prisma.articlesWhereInput)
          : undefined,
        orderBy: {
          created_at: "desc",
        },
        include: {
          author: true,
          article_categories: {
            include: {
              category: true,
            },
          },
          article_tags: {
            include: {
              tag: true,
            },
          },
        },
      });
      const response = ServiceResponse.success(
        "Success",
        articles,
        StatusCodes.OK
      );
      res.status(response.statusCode).json(response);
    } catch (error) {
      const response = ServiceResponse.failure(
        "Failed to fetch articles",
        error,
        StatusCodes.INTERNAL_SERVER_ERROR
      );
      res.status(response.statusCode).json(response);
    }
  };

  public getArticle: RequestHandler = async (req, res) => {
    const articleId = req.params.id;

    try {
      const article = await db.articles.findFirst({
        where: {
          id: articleId,
        },
        include: {
          author: true,
          article_categories: {
            include: {
              category: true,
            },
          },
          article_tags: {
            include: {
              tag: true,
            },
          },
        },
      });

      const response = ServiceResponse.success(
        "Success",
        article,
        StatusCodes.OK
      );
      res.status(response.statusCode).json(response);
    } catch (error: any) {
      const response = ServiceResponse.failure(
        error.meta.cause,
        error,
        StatusCodes.INTERNAL_SERVER_ERROR
      );
      res.status(response.statusCode).json(response);
    }
  };

  public createArticle: RequestHandler = async (req, res) => {
    let cover_img = "";
    if (req.file) {
      const res = await imagekit.upload({
        file: req.file.buffer,
        fileName: req.file.originalname,
        folder: "/articles/cover_images", // <-- specify the folder here
      });
      cover_img = res.url;
    }

    try {
      const article = await db.articles.create({
        data: {
          title: req.body.title,
          content: req.body.content,
          author_id: req.body.author_id,
          summary: req.body.summary,
          cover_img,
        },
      });

      const response = ServiceResponse.success(
        "Article created",
        article,
        StatusCodes.CREATED
      );

      if (req.body.tags) {
        await db.article_tags.createMany({
          data: req.body.tags.map((tag: string) => ({
            article_id: article.id,
            tag_id: tag,
          })),
        });
      }

      if (req.body.categories) {
        await db.article_categories.createMany({
          data: req.body.categories.map((category: string) => ({
            article_id: article.id,
            category_id: category,
          })),
        });
      }

      res.status(response.statusCode).json(response);
    } catch (error: any) {
      const response = ServiceResponse.failure(
        error.message,
        error,
        StatusCodes.INTERNAL_SERVER_ERROR
      );
      res.status(response.statusCode).json(response);
    }
  };

  public updateArticle: RequestHandler = async (req, res) => {
    const articleId = req.params.id;

    try {
      const article = await db.articles.update({
        where: {
          id: articleId,
        },
        data: req.body,
      });
      const response = ServiceResponse.success(
        "Success",
        article,
        StatusCodes.OK
      );
      res.status(response.statusCode).json(response);
    } catch (error: any) {
      const response = ServiceResponse.failure(
        error.meta.cause,
        error,
        StatusCodes.INTERNAL_SERVER_ERROR
      );
      res.status(response.statusCode).json(response);
    }
  };

  public deleteArticle: RequestHandler = async (req, res) => {
    const articleId = req.params.id;

    try {
      const article = await db.articles.delete({
        where: {
          id: articleId,
        },
      });
      const response = ServiceResponse.success(
        "Success",
        article,
        StatusCodes.OK
      );
      res.status(response.statusCode).json(response);
    } catch (error: any) {
      const response = ServiceResponse.failure(
        error.meta.cause,
        error,
        StatusCodes.INTERNAL_SERVER_ERROR
      );
      res.status(response.statusCode).json(response);
    }
  };
}

export const articlesController = new ArticlesController();
