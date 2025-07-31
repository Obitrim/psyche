import { z } from "zod";

export const PsychologistSchema = z.object({
  id: z.string().uuid(),
  name: z.string(),
  email: z.string(),
  phone: z.string().optional(),
  created_at: z.date().optional(),
  updated_at: z.date().optional(),
  articles: z.array(z.unknown()).optional(),
});

export const CreatePsychologistDtoSchema = PsychologistSchema.pick({
  name: true,
  email: true,
  phone: true,
});

export type Psychologist = z.infer<typeof PsychologistSchema>;
