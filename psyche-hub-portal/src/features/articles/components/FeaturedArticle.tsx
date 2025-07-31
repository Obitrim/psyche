
import { Article } from "@/types";
import ArticleCard from "./ArticleCard";

interface FeaturedArticleProps {
  article: Article;
}

const FeaturedArticle = ({ article }: FeaturedArticleProps) => {
  return (
    <div className="mb-12">
      <div className="mb-6">
        <h2 className="text-3xl font-bold mb-2">Featured Article</h2>
        <div className="h-1 w-20 bg-psyche-300 rounded-full"></div>
      </div>
      <ArticleCard article={article} variant="featured" />
    </div>
  );
};

export default FeaturedArticle;
