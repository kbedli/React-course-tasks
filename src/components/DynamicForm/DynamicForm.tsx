import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { RegistrationFormData, validationSchema } from "./types";
import { Button, Input } from "../../ui";
import { useState } from "react";
import { cn } from "../../utils/cn";

type RegistrationForm = {
  firstName: string;
  lastName: string;
  interests?: string;
};

export const DynamicForm = () => {
  const [showInterests, setShowInterest] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegistrationFormData>({
    resolver: zodResolver(validationSchema),
  });

  const handleRegistrationForm: SubmitHandler<RegistrationForm> = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(handleRegistrationForm)} className="mt-3">
      <Input
        label="Firs tName"
        {...register("firstName")}
        error={errors.firstName}
      />

      <Input
        label="Last Name"
        {...register("lastName")}
        error={errors.lastName}
      />

      <div className="my-2 flex">
        <label htmlFor="interests" className="mr-2">
          Interests
        </label>
        <div className="flex">
          {showInterests ? null : (
            <Button label="Add" onClick={() => setShowInterest(true)} />
          )}
          {showInterests && (
            <input
              id="interests"
              {...register("interests")}
              className={cn("border-black mr-5  border-2 rounded", {
                "text-red-300 border-2 border-red-300 ring-red-300 placeholder:text-red-300 focus:ring-red-500":
                  errors.interests,
              })}
            />
          )}
          {showInterests && (
            <Button label="Remove" onClick={() => setShowInterest(false)} />
          )}
        </div>
      </div>

      <Button label="Send" type="submit" className="mt-3" />
    </form>
  );
};
