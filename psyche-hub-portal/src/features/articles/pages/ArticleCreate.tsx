import { useNavigate } from "react-router-dom";
import Layout from "@/core/components/layout/Layout";
import { Button } from "@/core/components/ui/button";
import { Input } from "@/core/components/ui/input";
import { Badge } from "@/core/components/ui/badge";
import { toast } from "@/core/hooks/use-toast";
import { Trash2, Save, Image } from "lucide-react";
import FileUploader from "@/core/components/ui/file-uploader";

// Mock categories and tags - in a real app, these would come from the API
import BlogEditor from "../components/BlogEditor";
import { Controller, useForm } from "react-hook-form";
import { CreateArticleDto, CreateArticleDtoSchema } from "../articles.type";
import { zodResolver } from "@hookform/resolvers/zod";
import { useFetchCategories } from "@/features/categories/categories.hook";
import { Skeleton } from "@/core/components/ui/skeleton";
import { useFetchTags } from "@/features/tags/tags.hook";
import { useCreateArticle } from "../hooks/useCreateArticle";
import { useEffect } from "react";
import { cn } from "@/core/lib/utils";

const ArticleCreate = () => {
  const navigate = useNavigate();

  const { data: categories = [], isFetching: fetchingCategories } =
    useFetchCategories();

  const { data: tags = [], isFetching: fetchingTags } = useFetchTags();

  const {
    mutate: createArticle,
    isPending: isCreatingArticle,
    isSuccess: isArticleCreated,
  } = useCreateArticle();

  const form = useForm<CreateArticleDto>({
    resolver: zodResolver(CreateArticleDtoSchema),
    defaultValues: {
      title: "",
      summary: "",
      cover_img: null,
      author_id: "3f8ed39e-281a-4914-a5b3-bbf5f6cf9ba6",
      content: "",
      tags: [],
      categories: [],
    },
    mode: "all",
  });

  useEffect(() => {
    if (isArticleCreated) {
      form.reset();
    }
  }, [isArticleCreated]);

  const handleCategoryToggle = (category: string) => {
    const selectedCategories = form.getValues().categories ?? [];
    if (selectedCategories.includes(category)) {
      form.setValue(
        "categories",
        selectedCategories.filter((cId) => cId !== category)
      );
    } else {
      form.setValue("categories", [...selectedCategories, category]);
    }

    form.trigger("categories");
  };

  const handleTagToggle = (tag: string) => {
    const selectedTags = form.getValues().tags ?? [];
    if (selectedTags.includes(tag)) {
      form.setValue(
        "tags",
        selectedTags.filter((tId) => tId !== tag)
      );
    } else {
      form.setValue("tags", [...selectedTags, tag]);
    }

    form.trigger("tags");
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

  // Check if form is valid
  const isFormValid = form.formState.isValid && !form.formState.isSubmitting;

  console.log({ values: form.getValues() });

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
            onClick={form.handleSubmit(
              async (values) => await createArticle(values)
            )}
            loading={isCreatingArticle || form.formState.isSubmitting}
            disabled={!isFormValid}>
            <Save size={18} />
            Save
          </Button>
          <Button
            variant="destructive"
            className="flex gap-2"
            onClick={handleDelete}>
            <Trash2 size={18} />
            Delete
          </Button>
          {/* <Button variant="outline" size="icon">
            <MoreHorizontal size={18} />
          </Button> */}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <div className="bg-white dark:bg-card rounded-lg shadow-sm border p-6">
              <div className="mb-4">
                <Controller
                  name="title"
                  control={form.control}
                  render={({ field }) => (
                    <Input
                      type="text"
                      placeholder="Title..."
                      className="text-2xl font-bold border-0 bg-transparent px-0 focus-visible:ring-0 focus-visible:ring-offset-0"
                      {...field}
                    />
                  )}
                />
                {form.formState.errors.title && (
                  <small className="text-red-500 text-xs">
                    {form.formState.errors.title.message}
                  </small>
                )}
              </div>

              <div className="mb-4">
                <Controller
                  name="summary"
                  control={form.control}
                  render={({ field }) => (
                    <Input
                      type="text"
                      placeholder="Summary..."
                      className="text-2xl font-bold border-0 bg-transparent px-0 focus-visible:ring-0 focus-visible:ring-offset-0"
                      {...field}
                    />
                  )}
                />
                {form.formState.errors.summary && (
                  <small className="text-red-500 text-xs">
                    {form.formState.errors.summary.message}
                  </small>
                )}
              </div>

              <Controller
                name="content"
                control={form.control}
                render={({ field }) => (
                  <BlogEditor
                    content={field.value}
                    setContent={field.onChange}
                  />
                )}
              />
              {form.formState.errors.content && (
                <p className="text-red-500 text-xs">
                  {form.formState.errors.content.message}
                </p>
              )}
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white dark:bg-card rounded-lg shadow-sm border p-6 mb-6">
              <h3 className="font-bold text-xl mb-3">Category</h3>

              <Controller
                name="categories"
                control={form.control}
                render={({ field }) => (
                  <div className="flex flex-wrap gap-2">
                    {fetchingCategories &&
                      new Array(4)
                        .fill(null)
                        .map((_, i) => (
                          <Skeleton className="w-16 h-7 rounded-full" key={i} />
                        ))}

                    {categories.map((category) => (
                      <Badge
                        key={category.id}
                        variant={
                          field.value.includes(category.id)
                            ? "default"
                            : "outline"
                        }
                        className="cursor-pointer"
                        onClick={() => handleCategoryToggle(category.id)}>
                        {category.label}
                      </Badge>
                    ))}
                  </div>
                )}
              />

              {form.formState.errors.categories && (
                <small className="text-red-500 text-xs">
                  {form.formState.errors.categories.message}
                </small>
              )}
            </div>

            <div className="bg-white dark:bg-card rounded-lg shadow-sm border p-6 mb-6">
              <h3 className="font-bold text-xl mb-3">Tags</h3>

              <Controller
                name="tags"
                control={form.control}
                render={({ field }) => (
                  <div className="flex flex-wrap gap-2">
                    {fetchingTags &&
                      new Array(4)
                        .fill(null)
                        .map((_, i) => (
                          <Skeleton className="w-16 h-7 rounded-full" key={i} />
                        ))}

                    {tags.map((tag) => (
                      <Badge
                        key={tag.id}
                        variant={
                          field.value.includes(tag.id) ? "default" : "outline"
                        }
                        className="cursor-pointer"
                        onClick={() => handleTagToggle(tag.id)}>
                        {tag.label}
                      </Badge>
                    ))}
                  </div>
                )}
              />
              {form.formState.errors.tags && (
                <small className="text-red-500 text-xs">
                  {form.formState.errors.tags.message}
                </small>
              )}
            </div>

            <div className="bg-white dark:bg-card rounded-lg shadow-sm border p-6">
              <h3 className="font-bold text-xl mb-3">Cover Image</h3>

              <Controller
                name="cover_img"
                control={form.control}
                render={({ field }) => (
                  <FileUploader
                    id={field.name}
                    name={field.name}
                    onChange={(e) => {
                      const file = e.target.files[0];
                      form.setValue("cover_img", file);
                      form.trigger("cover_img");
                    }}
                    render={({
                      isDragOver,
                      handleDragOver,
                      handleDragLeave,
                      handleDrop,
                    }) => (
                      <div
                        className={cn(
                          "border-2 border-dashed rounded-md flex flex-col items-center justify-center cursor-pointer hover:bg-muted/50 transition-colors",
                          {
                            "bg-muted/50": isDragOver,
                            "p-8": !field.value,
                          }
                        )}
                        onDragOver={handleDragOver}
                        onDragLeave={handleDragLeave}
                        onDrop={handleDrop}>
                        {field.value ? (
                          <img
                            src={URL.createObjectURL(field.value)}
                            alt="Cover Image"
                            className="w-full h-auto mb-2"
                          />
                        ) : (
                          <>
                            <Image
                              size={24}
                              className="text-muted-foreground mb-2"
                            />
                            <p className="text-sm text-muted-foreground">
                              Upload cover image
                            </p>
                            <p className="text-xs text-muted-foreground mt-1">
                              Recommended: 1200 x 630px
                            </p>
                          </>
                        )}
                      </div>
                    )}
                  />
                )}
              />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ArticleCreate;
