import { useQuery } from "@tanstack/react-query";
import { CategoryQueryKey } from "./categories.type";
import { CategoriesService } from "./categories.service";

const useFetchCategories = () => {
  return useQuery({
    queryKey: [CategoryQueryKey.ALL_CATEGORIES],
    queryFn: CategoriesService.getCategories,
    refetchOnWindowFocus: false,
  });
};

export { useFetchCategories };
