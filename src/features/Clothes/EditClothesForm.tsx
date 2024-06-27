import { useForm, type SubmitHandler } from "react-hook-form";
import { Button, Input } from "../../ui";
import {
  ClothesDto,
  CreateClothesDto,
  createClothesSchema,
} from "../../types/Clothes";
import { zodResolver } from "@hookform/resolvers/zod";

type Props = {
  onSubmit: (data: CreateClothesDto) => void;
  clothData: ClothesDto | null;
};

export const EditClothesForm = ({ onSubmit, clothData }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateClothesDto>({
    resolver: zodResolver(createClothesSchema),
    defaultValues: {
      name: clothData?.fields.name,
      description: clothData?.fields.description,
      price: clothData?.fields.price,
    },
  });

  const handleRegistrationForm: SubmitHandler<CreateClothesDto> = (data) => {
    onSubmit(data);
  };

  return (
    <form onSubmit={handleSubmit(handleRegistrationForm)}>
      <Input label="Name" {...register("name")} error={errors.name} />
      <Input
        label="Description"
        {...register("description")}
        error={errors.description}
      />
      <Input
        label="Price"
        {...register("price", { valueAsNumber: true })}
        error={errors.price}
      />

      <Button label="Edit" type="submit" />
    </form>
  );
};
