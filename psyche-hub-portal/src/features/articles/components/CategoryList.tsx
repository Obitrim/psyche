
import { Category } from "@/types";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";

interface CategoryListProps {
  categories: Category[];
  title?: string;
}

const CategoryList = ({ categories, title = "Categories" }: CategoryListProps) => {
  return (
    <div className="mb-8">
      <h3 className="text-lg font-medium mb-3">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {categories.map((category) => (
          <Link key={category.id} to={`/categories/${category.slug}`}>
            <Badge variant="outline" className="hover:bg-psyche-100 transition-colors">
              {category.name}
            </Badge>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
