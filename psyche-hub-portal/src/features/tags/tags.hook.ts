import { useQuery } from "@tanstack/react-query";

import { TagsService } from "./tags.service";
import { TagsQueryKey } from "./tags.type";

const useFetchTags = () => {
  return useQuery({
    queryKey: [TagsQueryKey.ALL_TAGS],
    queryFn: TagsService.fetchTags,
    refetchOnWindowFocus: false,
  });
};

export { useFetchTags };
