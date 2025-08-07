import db from "@/common/lib/prisma/client";
import { ServiceResponse } from "@/common/models/serviceResponse";
import { RequestHandler } from "express";
import { StatusCodes } from "http-status-codes";

export class CategoriesController {
  static getCategories: RequestHandler = async (_req, res) => {
    try {
      const categories = await db.categories.findMany();
      const response = ServiceResponse.success(
        "Success",
        categories,
        StatusCodes.OK
      );
      res.status(response.statusCode).json(response);
    } catch (error) {
      const response = ServiceResponse.failure(
        "Failed to fetch categories",
        error,
        StatusCodes.INTERNAL_SERVER_ERROR
      );
      res.status(response.statusCode).json(response);
    }
  };

  static createCategory: RequestHandler = async (req, res) => {
    try {
      const category = await db.categories.create({
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
