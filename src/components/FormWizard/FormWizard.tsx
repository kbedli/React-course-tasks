import { Controller, useForm } from "react-hook-form";
import { Button, Input } from "../../ui";
import { zodResolver } from "@hookform/resolvers/zod";
import { type RegistrationFormData, validationSchema } from "./types";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";

export const FormWizard = () => {
  const [step, setStep] = useState(1);
  const [formFinished, setFormFinished] = useState(false);

  const {
    control,
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<RegistrationFormData>({
    resolver: zodResolver(validationSchema),
  });

  const watchFields = watch(["firstName", "lastName", "hobby", "dateOfBirth"]);
  const [firstName, lastName, hobby, dateOfBirth] = watchFields;

  const nextForm = () => {
    setStep((step) => step + 1);
    console.log("kliknięto next");
  };

  const previousForm = () => {
    setStep((step) => step - 1);
  };

  const handleRegistrationForm = (data) => {
    console.log(data);
    setFormFinished(true);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(handleRegistrationForm)}>
        {step === 1 && (
          <div>
            <Input
              label="First Name"
              {...register("firstName")}
              error={errors.firstName}
            />
            <Input
              label="Last Name"
              {...register("lastName")}
              error={errors.lastName}
            />
            <Button label="Next" onClick={nextForm} />
          </div>
        )}
        {step === 2 && (
          <div>
            <label htmlFor="data-picker" className="mr-3">
              Date of birth
            </label>

            <Controller
              control={control}
              name="dateOfBirth"
              //   {...register("dateOfBirth")}
              render={({ field }) => (
                <DatePicker
                  className="border-black mr-5  border-2 rounded"
                  placeholderText="Select date"
                  selected={field.value}
                  onChange={(date) => field.onChange(date.toDateString())}
                />
              )}
            />

            <Input label="Hobby" {...register("hobby")} error={errors.hobby} />
            <Button label="Previous" onClick={previousForm} />
            <Button label="Next" onClick={nextForm} />
          </div>
        )}
        {step === 3 && (
          <div>
            {formFinished && (
              <p className="text-bold text-green-500">
                The form has been submitted successfully!
              </p>
            )}
            <p className="font-bold">Summary</p>
            <p>
              <span className="font-bold">First Name: </span> {firstName}
            </p>
            {errors.firstName && (
              <p className="text-red-500">{errors.firstName.message}</p>
            )}
            <p>
              <span className="font-bold">Last Name: </span> {lastName}
            </p>
            {errors.lastName && (
              <p className="text-red-500">{errors.lastName.message}</p>
            )}
            <p>
              <span className="font-bold">Date of Birth: </span>
              {dateOfBirth}
            </p>
            <p>
              <span className="font-bold">Hobby: </span> {hobby}
            </p>
            {errors.hobby && (
              <p className="text-red-500">{errors.hobby.message}</p>
            )}

            {formFinished === false && (
              <Button label="Previous" onClick={previousForm} />
            )}
            {formFinished === false && <Button label="Finish" type="submit" />}
          </div>
        )}
      </form>
    </div>
  );
};
