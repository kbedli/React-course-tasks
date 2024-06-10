import { z } from "zod";

export const validationSchema = z.object({
  firstName: z.string().min(3, "Invalid first name "),
  lastName: z.string().min(3, "Invalid last name "),
  interests: z.string().min(3, "Invalid interest"),
});

export type RegistrationFormData = z.infer<typeof validationSchema>;
