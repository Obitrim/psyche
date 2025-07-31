import db from "@/common/lib/prisma/client";
import { ServiceResponse } from "@/common/models/serviceResponse";
import { RequestHandler } from "express";
import { StatusCodes } from "http-status-codes";

class ArticlesController {
  public getArticles: RequestHandler = async (_req, res) => {
    try {
      const articles = await db.articles.findMany();
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
    try {
      const article = await db.articles.create({
        data: req.body,
      });

      const response = ServiceResponse.success(
        "Article created",
        article,
        StatusCodes.CREATED
      );
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
