import { z } from "zod";

export const ArticleSchema = z.object({
  id: z.string().uuid(),
  title: z.string(),
  summary: z.coerce.string(),
  cover_img: z.coerce.string(),
  content: z.string().optional(),
  author_id: z.string().uuid().optional(),
  created_at: z.date().optional(),
  updated_at: z.date().optional(),
  article_categories: z.array(z.object({})).optional(),
  article_tags: z.array(z.object({})).optional(),
  author: z.object({}).optional(),
});

export type Article = z.infer<typeof ArticleSchema>;

export type CreateArticleDto = Pick<Article, "title" | "content" | "author_id">;

export const FetchArticlesDtoSchema = z.object({
  query: z
    .object({
      filters: z.any(),
    })
    .optional(),
});

export const CreateArticleDtoSchema = z.object({
  body: ArticleSchema.pick({
    title: true,
    summary: true,
    content: true,
    author_id: true,
  }).extend({
    tags: z.array(z.string().uuid()).optional(),
    categories: z.array(z.string().uuid()).optional(),
  }),
});

export const GetArticleDtoSchema = z.object({
  params: z.object({
    id: z.string().uuid(),
  }),
});

export const DeleteArticleDtoSchema = z.object({
  params: z.object({
    id: z.string().uuid(),
  }),
});

export const UpdateArticleDtoSchema = z.object({
  params: z.object({
    id: z.string().uuid(),
  }),
  body: ArticleSchema.pick({
    title: true,
    content: true,
    author_id: true,
  }),
});
