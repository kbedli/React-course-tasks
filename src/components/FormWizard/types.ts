import { z } from "zod";

export const validationSchema = z.object({
  firstName: z.string().min(3, "Enter correct first name"),
  lastName: z.string().min(3, "Enter correct last name"),
  hobby: z.string().min(3, "Enter correct hobby"),
  dateOfBirth: z.string(),
});

export type RegistrationFormData = z.infer<typeof validationSchema>;
