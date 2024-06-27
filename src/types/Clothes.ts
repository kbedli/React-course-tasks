import { z } from "zod";

export type Clothes = {
  id: number;
  name: string;
  price: number;
};

export type ClothesDto = {
  id: number | string;
  fields: {
    name: string;
    description: string;
    price: number;
    created_at: Date;
    updated_at: Date;
  };
};

export const createClothesSchema = z.object({
  name: z.string().min(3, "Name is required"),
  description: z.string().min(3, "Description is required"),
  price: z.number().min(1, { message: "Price must be greater than 0" }),
});

export type CreateClothesDto = z.infer<typeof createClothesSchema>;
