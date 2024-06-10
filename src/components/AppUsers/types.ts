import { z } from "zod";

export const validationSchema = z.object({
  email: z.string().min(3, "E-mail is required"),
  //   email: z.string().email({ message: "Invalid e-mail" }),
  firstName: z.string().min(3, "Password is required"),
  lastName: z.string().min(1, "Language is required"),
});

export type RegistrationFormData = z.infer<typeof validationSchema>;
