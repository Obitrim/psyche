import { z } from "zod";

export type Merge<T> = {
  [K in keyof T]: K extends string ? T[K] : never;
};

export const ImageFileSchema = z.object({
  name: z.string(),
  lastModified: z.coerce.number(),
  lastModifiedDate: z.coerce.date(),
  type: z.string().refine((type) => type.startsWith("image"), {
    message: "Unsupported file type",
  }),
  size: z.coerce.number().max(10 * 1024 * 1024, "File too large"), // 10MB
  webkitRelativePath: z.coerce.string(),
});
