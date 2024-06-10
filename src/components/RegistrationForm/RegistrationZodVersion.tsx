import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Input } from "../../ui";
import { type RegistrationFormData, validationSchema } from "./types";

export const RegistrationZodVersion = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegistrationFormData>({
    resolver: zodResolver(validationSchema),
  });

  const handleRegistrationForm: SubmitHandler<RegistrationFormData> = (
    data
  ) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(handleRegistrationForm)}>
      <Input
        label="E-mail"
        {...register("email")}
        type="email"
        error={errors.email}
      />

      <Input
        label="Password"
        {...register("password")}
        type="password"
        error={errors.password}
      />

      <Input
        label="Language"
        {...register("language")}
        error={errors.language}
      />
      {/* {errors.language && (
        <p className="text-red-500">{errors.language.message}</p>
      )} */}
      <Button label="Send" type="submit" />
    </form>
  );
};
