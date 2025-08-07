import { Article } from "@/core/types";
import ArticleCard from "./ArticleCard";

interface FeaturedArticleProps {
  article?: Article;
  loading?: boolean;
}

const FeaturedArticle = ({ article, loading }: FeaturedArticleProps) => {
  return (
    <div className="mb-12">
      <div className="mb-6">
        <h2 className="text-3xl font-bold mb-2">Featured Article</h2>
        <div className="h-1 w-20 bg-psyche-300 rounded-full"></div>
      </div>
      {article && (
        <ArticleCard article={article} variant="featured" loading={loading} />
      )}

      {!article && <p>No article</p>}
    </div>
  );
};

export default FeaturedArticle;
