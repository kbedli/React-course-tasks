import { FormEventHandler, useEffect, useRef } from "react";
import { Button, Input } from "../../ui";

type RegistrationFormData = {
  email: string;
  password: string;
  language: string;
};

export const RegistrationFormRefs = () => {
  const emailFieldRef = useRef<HTMLInputElement>(null);
  const passwordFieldRef = useRef<HTMLInputElement>(null);
  const languageFieldRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (emailFieldRef.current) {
      emailFieldRef.current.focus();
      // emailFieldRef.current.style.border = "1px solid #f00";
    }
  }, []);

  const handleSubmit: FormEventHandler = (event) => {
    event.preventDefault();
    const data: RegistrationFormData = {
      email: emailFieldRef.current?.value || "",
      password: passwordFieldRef.current?.value || "",
      language: languageFieldRef.current?.value || "",
    };
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input label="E-mail" ref={emailFieldRef} type="email" />
      {/* <div className="my-2">
        <label htmlFor="email" className="mr-2">
          E-mail
        </label>
        <input id="email" ref={emailFieldRef} type="email" />
      </div> */}
      <Input label="Password" ref={passwordFieldRef} type="password" />
      {/* <div className="my-2">
        <label htmlFor="password" className="mr-2">
          Password
        </label>
        <input id="password" ref={passwordFieldRef} type="password" />
      </div> */}
      <Input label="Language" ref={languageFieldRef} />
      {/* <div className="my-2">
        <label htmlFor="language" className="mr-2">
          Language
        </label>
        <input id="language" ref={languageFieldRef} />
      </div> */}
      <Button label="Send" type="submit" />
    </form>
  );
};
