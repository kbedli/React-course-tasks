import { ChangeEventHandler, FormEventHandler, useState } from "react";
import { Button, Header, Text } from "../../ui";

export const ComponentGenerator = () => {
  const [value, setValue] = useState("button");
  const [props, setProps] = useState("Props");
  const [inputValue, setInputValue] = useState("");

  const handleChange: ChangeEventHandler<HTMLSelectElement> = (event) => {
    setValue(event.target.value);
  };

  const handleSubmit: FormEventHandler = (event) => {
    event.preventDefault();
    setProps(inputValue);
    setInputValue("");
  };

  return (
    <div>
      <label>
        Pick a Component:
        <select
          name="selectedComponent"
          className="ml-3"
          onChange={handleChange}
        >
          <option value="button">Button</option>
          <option value="text">Text</option>
          <option value="header">Header</option>
        </select>
      </label>

      {value === "button" && (
        <Button label="Button" className="block mt-5 mx-auto" />
      )}
      {value === "text" && (
        <>
          <Text children={props} />
          <form onSubmit={handleSubmit}>
            <input
              className=" border-black mr-5  border-2"
              value={inputValue}
              onChange={(e) => {
                setInputValue(e.target.value);
              }}
            />
            <Button label="Send" type="submit" />
          </form>
        </>
      )}
      {value === "header" && <Header children="Header" />}
    </div>
  );
};
