import { Article } from "../articles.type";
import ArticleCard from "./ArticleCard";
import { Skeleton } from "@/core/components/ui/skeleton";

interface ArticleGridProps {
  articles: Article[];
  title?: string;
  loading?: boolean;
  className?: string;
}

const ArticleGrid = ({
  articles,
  title,
  loading,
  className,
}: ArticleGridProps) => {
  return (
    <div className={className}>
      {title && (
        <div className="mb-6">
          <h2 className="text-2xl font-bold mb-2">{title}</h2>
          <div className="h-1 w-20 bg-psyche-300 rounded-full"></div>
        </div>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {loading
          ? new Array(4)
              .fill(null)
              .map((_, index) => (
                <Skeleton key={index} className="w-full h-32" />
              ))
          : articles.map((article) => (
              <ArticleCard
                key={article.id}
                article={article}
                loading={loading}
              />
            ))}
      </div>
    </div>
  );
};

export default ArticleGrid;
