import { z } from "zod";

export const validationSchema = z.object({
  email: z.string().min(3, "E-mail is required"),
  //   email: z.string().email({ message: "Invalid e-mail" }),
  password: z.string().min(3, "Password is required"),
  language: z
    .string()
    .min(1, "Language is required")
    .max(5, "Max 5 characters"),
});

export type RegistrationFormData = z.infer<typeof validationSchema>;
