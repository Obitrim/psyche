import { z } from "zod";

export const CreateCategoryDtoSchema = z.object({
  body: z.object({
    label: z.string().min(2),
  }),
});
