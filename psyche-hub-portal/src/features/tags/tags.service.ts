import { api } from "@/core/lib/axios.lib";

export class TagsService {
  static async fetchTags() {
    try {
      const response = await api.get("/tags");
      console.log({ response });
      return response.data.data;
    } catch (error) {
      throw new Error("Failed to fetch Tags");
    }
  }
}
