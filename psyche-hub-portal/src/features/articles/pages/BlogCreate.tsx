import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Category, Tag } from "@/types";
import { Badge } from "@/components/ui/badge";
import { toast } from "@/hooks/use-toast";
import { Trash2, Save, MoreHorizontal, Image } from "lucide-react";

// Mock categories and tags - in a real app, these would come from the API
import { categories, tags } from "@/data/mockData";
import BlogEditor from "../components/articlesEditor";

const BlogCreate = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [selectedCategories, setSelectedCategories] = useState<Category[]>([]);
  const [selectedTags, setSelectedTags] = useState<Tag[]>([]);
  const [isSaving, setIsSaving] = useState(false);

  const handleCategoryToggle = (category: Category) => {
    if (selectedCategories.some((c) => c.id === category.id)) {
      setSelectedCategories(
        selectedCategories.filter((c) => c.id !== category.id)
      );
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };

  const handleTagToggle = (tag: Tag) => {
    if (selectedTags.some((t) => t.id === tag.id)) {
      setSelectedTags(selectedTags.filter((t) => t.id !== tag.id));
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
  };

  const handleSaveDraft = () => {
    if (!title) {
      toast({
        title: "Title required",
        description: "Please enter a title for your article",
        variant: "destructive",
      });
      return;
    }

    setIsSaving(true);

    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Draft saved!",
        description: "Your article has been saved as a draft",
      });
      setIsSaving(false);
    }, 1000);
  };

  const handleDelete = () => {
    if (confirm("Are you sure you want to delete this draft?")) {
      toast({
        title: "Draft deleted",
        description: "Your draft has been deleted",
      });
      navigate("/articles");
    }
  };

  return (
    <Layout>
      <div className="container py-8">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-3xl font-bold">Blog: Create new Article</h1>
          {/* <div className="flex items-center gap-2">
            <div className="bg-psyche-100 rounded-full h-10 w-10 flex items-center justify-center overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" 
                alt="User profile" 
                className="h-full w-full object-cover"
              />
            </div>
            <div className="text-sm">
              <p className="font-medium">Alfred Siñaga</p>
              <p className="text-muted-foreground text-xs">alfred@gmail.com</p>
            </div>
          </div> */}
        </div>

        <p className="text-muted-foreground mb-6">
          Express your psychology insights and share your expertise with our
          community.
        </p>

        <div className="flex gap-4 mb-8">
          <Button
            variant="default"
            className="flex gap-2"
            onClick={handleSaveDraft}
            disabled={isSaving}>
            <Save size={18} />
            Save to Draft
          </Button>
          <Button
            variant="destructive"
            className="flex gap-2"
            onClick={handleDelete}>
            <Trash2 size={18} />
            Delete
          </Button>
          <Button variant="outline" size="icon">
            <MoreHorizontal size={18} />
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <div className="bg-white dark:bg-card rounded-lg shadow-sm border p-6">
              <Input
                type="text"
                placeholder="Article Title..."
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="text-2xl font-bold border-0 bg-transparent px-0 focus-visible:ring-0 focus-visible:ring-offset-0 mb-4"
              />

              <BlogEditor content={content} setContent={setContent} />
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white dark:bg-card rounded-lg shadow-sm border p-6 mb-6">
              <h3 className="font-medium mb-3">Category</h3>
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <Badge
                    key={category.id}
                    variant={
                      selectedCategories.some((c) => c.id === category.id)
                        ? "default"
                        : "outline"
                    }
                    className="cursor-pointer"
                    onClick={() => handleCategoryToggle(category)}>
                    {category.name}
                  </Badge>
                ))}
                <Badge variant="outline" className="cursor-pointer">
                  + Add
                </Badge>
              </div>
            </div>

            <div className="bg-white dark:bg-card rounded-lg shadow-sm border p-6 mb-6">
              <h3 className="font-medium mb-3">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <Badge
                    key={tag.id}
                    variant={
                      selectedTags.some((t) => t.id === tag.id)
                        ? "default"
                        : "outline"
                    }
                    className="cursor-pointer"
                    onClick={() => handleTagToggle(tag)}>
                    {tag.name}
                  </Badge>
                ))}
                <Badge variant="outline" className="cursor-pointer">
                  + Add
                </Badge>
              </div>
            </div>

            <div className="bg-white dark:bg-card rounded-lg shadow-sm border p-6">
              <h3 className="font-medium mb-3">Cover Image</h3>
              <div className="border-2 border-dashed rounded-md p-8 flex flex-col items-center justify-center cursor-pointer hover:bg-muted/50 transition-colors">
                <Image size={24} className="text-muted-foreground mb-2" />
                <p className="text-sm text-muted-foreground">
                  Upload cover image
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  Recommended: 1200 x 630px
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default BlogCreate;
