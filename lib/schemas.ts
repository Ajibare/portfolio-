import { z } from "zod";

export const projectTypes = [
  "Web Application",
  "Backend / API",
  "Business Software",
  "Product Development",
  "Other",
] as const;

export const projectTypeSchema = z.enum([...projectTypes]);

export const contactSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name.").max(120),
  email: z.email("Please enter a valid email address.").trim().max(254),
  projectType: projectTypeSchema,
  message: z
    .string()
    .trim()
    .min(10, "Give a little more detail — at least 10 characters.")
    .max(2000),
});

export type ContactInput = z.infer<typeof contactSchema>;

export const contactResponseSchema = z.discriminatedUnion("ok", [
  z.object({ ok: z.literal(true), dev: z.boolean().optional() }),
  z.object({ ok: z.literal(false), error: z.string() }),
]);

export type ContactResponse = z.infer<typeof contactResponseSchema>;