import { z } from "zod";

export const todoSchema = z.object({
  title: z.string().min(2, "Title is required"),
  subtitle: z.string().min(2, "Subtitle is required"),
});

export type TodoFormValues = z.infer<typeof todoSchema>;
