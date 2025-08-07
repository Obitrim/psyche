import { useQuery } from "@tanstack/react-query";
import { ArticleQueryKey } from "../articles.type";
import { ArticlesService } from "../articles.service";

interface UseFetchArticlesProps {
  filters?: unknown;
}

const useFetchArticles = (props?: UseFetchArticlesProps) => {
  return useQuery({
    queryKey: [
      ArticleQueryKey.ALL_ARTICLES,
      JSON.stringify(props?.filters ?? {}),
    ],
    queryFn: () => ArticlesService.getArticles(props?.filters),
    refetchOnWindowFocus: false,
  });
};

export { useFetchArticles };
