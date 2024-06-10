import { ChangeEventHandler, useEffect, useState } from "react";
import { Input } from "../../ui";
import FormWizard from "react-form-wizard-component";
import "react-form-wizard-component/dist/style.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

type RegistrationFormData = {
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  hobby: string;
};

export const NewWizard = () => {
  //   const firstNameFieldRef = useRef<HTMLInputElement>(null);
  //   const lastNameFieldRef = useRef<HTMLInputElement>(null);
  //   const dateOfBirthFieldRef = useRef<HTMLInputElement>(null);
  //   const hobbyFieldRef = useRef<HTMLInputElement>(null);

  const [formData, setFormData] = useState<RegistrationFormData>({
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    hobby: "",
  });

  const { firstName, lastName, dateOfBirth, hobby } = formData;

  const [date, setDate] = useState("");

  const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    const id = event.target.name;
    const value = event.target.value;
    setFormData({
      ...formData,
      [id]: value,
    });
  };

  const handleComplete = () => {
    console.log("Completed");
    // Handle form completion logic here
  };
  const tabChanged = ({
    prevIndex,
    nextIndex,
  }: {
    prevIndex: number;
    nextIndex: number;
  }) => {
    console.log("prevIndex", prevIndex);
    console.log("nextIndex", nextIndex);
  };

  return (
    <>
      <FormWizard
        shape="circle"
        color="blue"
        onComplete={handleComplete}
        onTabChange={tabChanged}
      >
        <FormWizard.TabContent title="Personal details" icon="ti-user">
          {/* Add your form inputs and components for the frst step */}
          <Input label="First Name" name="firstName" onChange={handleChange} />
          <Input label="Last Name" name="lastName" onChange={handleChange} />
        </FormWizard.TabContent>
        <FormWizard.TabContent title="Additional Info" icon="ti-settings">
          <label htmlFor="data-picker" className="mr-3">
            Date of birth
          </label>
          <DatePicker
            className="border-black mr-5  border-2 rounded"
            selected={date}
            dateFormat="dd/MM/yyyy"
            onChange={(newDate) => setDate(newDate)}
            showYearDropdown
            scrollableMonthYearDropdown
          />
          <Input label="Hobby" name="hobby" onChange={handleChange} />
        </FormWizard.TabContent>
        <FormWizard.TabContent title="Last step" icon="ti-check">
          <div>
            <p>First Name: {firstName}</p>
            <p>Last Name: {lastName}</p>
            {/* <p>
              Date of birth:{" "}
              {`${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`}
            </p> */}
            <p>Hobby: {hobby}</p>
          </div>
        </FormWizard.TabContent>
      </FormWizard>
      {/* add style */}
      <style>{`
        @import url("https://cdn.jsdelivr.net/gh/lykmapipo/themify-icons@0.1.2/css/themify-icons.css");
      `}</style>
    </>
  );
};
