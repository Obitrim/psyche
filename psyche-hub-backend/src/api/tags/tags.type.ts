import { z } from "zod";

export const CreateTagDtoSchema = z.object({
  body: z.object({
    label: z.string().min(2),
  }),
});
