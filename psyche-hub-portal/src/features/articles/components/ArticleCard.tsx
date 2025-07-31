import { Article } from "@/types";
import { Link } from "react-router-dom";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { formatDistanceToNow } from "date-fns";

interface ArticleCardProps {
  article: Article;
  variant?: "default" | "featured";
}

const ArticleCard = ({ article, variant = "default" }: ArticleCardProps) => {
  const isFeatured = variant === "featured";

  return (
    <Card
      className={`overflow-hidden transition-all hover:shadow-md ${
        isFeatured ? "h-full" : ""
      }`}>
      <Link to={`/articles/${article.slug}`}>
        <div
          className={`relative ${
            isFeatured ? "h-72" : "h-48"
          } overflow-hidden`}>
          <img
            src={article.coverImage}
            alt={article.title}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
          {article.featured && !isFeatured && (
            <div className="absolute top-2 left-2">
              <Badge
                variant="secondary"
                className="bg-psyche-300 text-white hover:bg-psyche-400">
                Featured
              </Badge>
            </div>
          )}
        </div>
      </Link>

      <CardHeader className="pb-2">
        <div className="flex gap-2 items-center text-sm text-muted-foreground mb-1">
          <Link
            to={`/categories/${article.category.slug}`}
            className="hover:text-foreground transition-colors">
            {article.category.name}
          </Link>
          <span>•</span>
          <span>{article.readTime} min read</span>
        </div>
        <Link to={`/articles/${article.slug}`}>
          <h3
            className={`font-semibold hover:text-psyche-300 transition-colors ${
              isFeatured ? "text-2xl" : "text-lg"
            }`}>
            {article.title}
          </h3>
        </Link>
      </CardHeader>

      <CardContent className="pb-3">
        <p className="text-muted-foreground line-clamp-2">{article.excerpt}</p>
      </CardContent>

      <CardFooter className="pt-0 flex items-center justify-between">
        <Link
          to={`/authors/${article.author.id}`}
          className="flex items-center gap-2 group">
          <div className="h-8 w-8 rounded-full overflow-hidden">
            <img
              src={article.author.avatar}
              alt={article.author.name}
              className="h-full w-full object-cover"
            />
          </div>
          <span className="text-sm group-hover:text-psyche-300 transition-colors">
            {article.author.name}
          </span>
        </Link>
        <span className="text-xs text-muted-foreground">
          {formatDistanceToNow(new Date(article.createdAt), {
            addSuffix: true,
          })}
        </span>
      </CardFooter>
    </Card>
  );
};

export default ArticleCard;
