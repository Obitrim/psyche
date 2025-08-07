import { useQuery } from "@tanstack/react-query";
import { ArticleQueryKey } from "../articles.type";
import { ArticlesService } from "../articles.service";

interface UseFetchArticleProps {
  id: string;
  enabled?: boolean;
}

const useFetchArticle = ({ id, enabled = true }: UseFetchArticleProps) => {
  return useQuery({
    queryKey: [ArticleQueryKey.SINGLE_ARTICLE, id],
    queryFn: () => ArticlesService.getArticle(id),
    enabled: enabled && !!id,
    refetchOnWindowFocus: false,
  });
};

export { useFetchArticle };
