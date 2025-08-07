import { Category } from "@/core/types";
import { Badge } from "@/core/components/ui/badge";

interface CategoryListProps {
  categories: Category[];
  title?: string;
  selected: Category[];
  onChange?: (selected: Category[]) => void;
}

const CategoryList = ({
  categories,
  selected,
  onChange,
  title = "Categories",
}: CategoryListProps) => {
  return (
    <div className="mb-8">
      <h3 className="text-lg font-medium mb-3">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {categories.map((category) => (
          <Badge
            variant={
              selected.some((t) => t.id === category.id) ? "default" : "outline"
            }
            onClick={() => {
              if (!onChange) return;

              const deselect = selected.some((c) => c.id === category.id);
              if (deselect) {
                onChange(selected.filter((c) => c.id !== category.id));
              } else {
                onChange([...selected, category]);
              }
            }}
            className="hover:bg-psyche-100 transition-colors cursor-pointer">
            {category.label}
          </Badge>
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
