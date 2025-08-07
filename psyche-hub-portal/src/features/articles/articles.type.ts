import { Category, Tag } from "@/core/types";
import { z } from "zod";

function nonEmptyHTMLString() {
  return z
    .string()
    .nonempty()
    .min(50)
    .refine((val) => {
      const parser = new DOMParser();
      const doc = parser.parseFromString(val, "text/html");
      return doc.body.textContent?.trim() !== "";
    });
}

export const CreateArticleDtoSchema = z.object({
  title: z.string().min(5).nonempty(),
  summary: z.coerce.string().min(5).nonempty(),
  content: nonEmptyHTMLString(),
  cover_img: z
    .instanceof(File)
    .refine((file) => file.size < 10 * 1024 * 1024, {
      message: "File size must be under 10MB",
    })
    .refine((file) => file.type.startsWith("image"), {
      message: "Only images are allowed",
    }),
  author_id: z.string().uuid(),
  tags: z.array(z.string().uuid()).min(1, "select at least one tag"),
  categories: z.array(z.string().uuid()).min(1, "select at least one category"),
});

export type CreateArticleDto = z.infer<typeof CreateArticleDtoSchema>;

export interface Article {
  id: string;
  title: string;
  summary: string;
  cover_img: string;
  content: string;
  author_id: string;
  created_at: string;
  updated_at: string;
  author?: {
    id: string;
    name: string;
    email: string;
    avatar: string;
  };
  article_categories?: Array<{
    category: Category;
  }>;
  article_tags?: Array<{
    tag: Tag;
  }>;
}

export enum ArticleQueryKey {
  ALL_ARTICLES = "all-articles",
  SINGLE_ARTICLE = "single-article",
}
