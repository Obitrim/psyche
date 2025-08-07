import db from "@/common/lib/prisma/client";
import { ServiceResponse } from "@/common/models/serviceResponse";
import { RequestHandler } from "express";
import { StatusCodes } from "http-status-codes";

export class TagsController {
  static getTags: RequestHandler = async (_req, res) => {
    try {
      const tags = await db.tags.findMany();
      const response = ServiceResponse.success("Success", tags, StatusCodes.OK);
      res.status(response.statusCode).json(response);
    } catch (error) {
      const response = ServiceResponse.failure(
        "Failed to fetch tags",
        error,
        StatusCodes.INTERNAL_SERVER_ERROR
      );
      res.status(response.statusCode).json(response);
    }
  };

  static createTag: RequestHandler = async (req, res) => {
    try {
      const category = await db.tags.create({
        data: req.body,
      });

      const response = ServiceResponse.success(
        "Category created",
        category,
        StatusCodes.CREATED
      );
      res.status(response.statusCode).json(response);
    } catch (error: any) {
      const response = ServiceResponse.failure(
        "Failed to create category",
        error,
        StatusCodes.INTERNAL_SERVER_ERROR
      );
      res.status(response.statusCode).json(response);
    }
  };
}

export default new TagsController();
