import { api } from "@/core/lib/axios.lib";

export class CategoriesService {
  static async getCategories() {
    console.log("fetching categories");
    try {
      const response = await api.get("/categories");
      console.log({ response });
      return response.data.data;
    } catch (error) {
      throw new Error("Failed to fetch categories");
    }
  }
}
