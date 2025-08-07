import Layout from "@/core/components/layout/Layout";

import { Input } from "@/core/components/ui/input";
import { Button } from "@/core/components/ui/button";
import { useState } from "react";
import { Badge } from "@/core/components/ui/badge";
import { Tag as TagType } from "@/core/types";
import { Link } from "react-router-dom";
import CategoryList from "../components/CategoryList";
import ArticleGrid from "../components/ArticleGrid";
import { useFetchArticles } from "../hooks/useFetchArticles";
import { useFetchCategories } from "@/features/categories/categories.hook";
import { useFetchTags } from "@/features/tags/tags.hook";
import useDebounce from "@/core/hooks/use-debounce";

const ArticlesPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTags, setSelectedTags] = useState<TagType[]>([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const debouncedSearchQuery = useDebounce(searchQuery, 500);

  const { data: articles = [] } = useFetchArticles({
    filters: {
      title: {
        contains: debouncedSearchQuery,
        mode: "insensitive",
      },
    },
  });

  const { data: categories = [] } = useFetchCategories();

  const { data: tags = [] } = useFetchTags();

  const toggleTag = (tag: TagType) => {
    if (selectedTags.find((t) => t.id === tag.id)) {
      setSelectedTags(selectedTags.filter((t) => t.id !== tag.id));
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
  };

  const filteredArticles = articles.filter((article) => {
    // Filter by selected tags
    const matchesTags =
      selectedTags.length === 0 ||
      article.article_tags.some((t) =>
        selectedTags.some((tag) => tag.id === t.tag_id)
      );

    const matchesCategories =
      selectedTags.length === 0 ||
      article.article_categories.some((t) =>
        selectedCategories.some((tag) => tag.id === t.tag_id)
      );

    return matchesTags || matchesCategories;
  });

  return (
    <Layout>
      <div className="bg-gradient-to-b from-psyche-50 to-background py-12">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-4">PsycheHub Blog</h1>
            <p className="text-lg text-muted-foreground mb-6">
              Expert insights, research, and practical advice for your mental
              wellness journey
            </p>

            <div className="flex justify-center gap-2">
              <Input
                placeholder="Search articles..."
                className="max-w-lg"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              {/* <Button type="submit" variant="default">
                Search
              </Button> */}
            </div>
          </div>
        </div>
      </div>

      <div className="container py-12">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold">Articles</h2>
          <Button asChild>
            <Link to="/articles/create">Create Article</Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
          <div className="lg:col-span-1 order-2 lg:order-1">
            <div className="sticky top-24">
              <CategoryList
                categories={categories}
                selected={selectedCategories}
                onChange={(v) => setSelectedCategories(v)}
              />

              <div className="mb-8">
                <h3 className="text-lg font-medium mb-3">Popular Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {tags.map((tag) => (
                    <Badge
                      key={tag.id}
                      variant={
                        selectedTags.find((t) => t.id === tag.id)
                          ? "default"
                          : "outline"
                      }
                      className="cursor-pointer"
                      onClick={() => toggleTag(tag)}>
                      {tag.label}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3 order-1 lg:order-2">
            <ArticleGrid articles={filteredArticles} className="" />

            {filteredArticles.length === 0 && (
              <div className="text-center py-12">
                <h3 className="text-xl font-medium mb-2">No articles found</h3>
                <p className="text-muted-foreground">
                  Try adjusting your search or filters
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ArticlesPage;
