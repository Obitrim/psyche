
import { Article } from "@/types";
import ArticleCard from "./ArticleCard";

interface ArticleGridProps {
  articles: Article[];
  title?: string;
}

const ArticleGrid = ({ articles, title }: ArticleGridProps) => {
  return (
    <div className="my-12">
      {title && (
        <div className="mb-6">
          <h2 className="text-2xl font-bold mb-2">{title}</h2>
          <div className="h-1 w-20 bg-psyche-300 rounded-full"></div>
        </div>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((article) => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </div>
    </div>
  );
};

export default ArticleGrid;
