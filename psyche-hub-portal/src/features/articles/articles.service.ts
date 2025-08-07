import { api } from "@/core/lib/axios.lib";
import {  Article, CreateArticleDto } from "./articles.type";

export class ArticlesService {
  static async createArticle(articleData: CreateArticleDto) {
    const formData = new FormData();

    for (const key in articleData) {
      const value = articleData[key];

      if (Array.isArray(value)) {
        value.forEach((v) => formData.append(`${key}[]`, v));
      } else if (value instanceof File || value instanceof Blob) {
        formData.append(key, value);
      } else if (typeof value === "object" && value !== null) {
        formData.append(key, JSON.stringify(value));
      } else if (value !== undefined && value !== null) {
        formData.append(key, String(value));
      }
    }

    try {
      const response = await api.post("/articles", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      return response.data.data;
    } catch (error) {
      throw new Error("Failed to create article");
    }
  }

  static async getArticles(filters?: unknown) {
    let query = "";
    if (filters && Object.keys(filters).length > 0) {
      query = `?filters=${JSON.stringify(filters)}`;
    }

    try {
      const response = await api.get(`/articles${query}`);
      return response.data.data;
    } catch (error) {
      throw new Error("Failed to fetch articles");
    }
  }

  static async getArticle(id: string) {
    try {
      const response = await api.get(`/articles/${id}`);
      return response.data.data as Article;
    } catch (error) {
      throw new Error("Failed to fetch article");
    }
  }
}
