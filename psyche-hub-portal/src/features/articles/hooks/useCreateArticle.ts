import { useMutation, useQueryClient } from "@tanstack/react-query";
import { CreateArticleDto, ArticleQueryKey } from "../articles.type";
import { ArticlesService } from "../articles.service";
import { toast } from "sonner";

export const useCreateArticle = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (newArticle: CreateArticleDto) =>
      ArticlesService.createArticle(newArticle),

    onSuccess: () => {
      toast.success("Article created successfully");
      queryClient.invalidateQueries({
        queryKey: [ArticleQueryKey.ALL_ARTICLES],
      });
    },
    onError: () => {
      toast.error("Failed to create article");
    },
  });
};
