import { ChangeEventHandler, useEffect, useState } from "react";
import { Input } from "../../ui";

const getLocalStorage = () => {
  const history = localStorage.getItem("history");
  if (history) {
    return JSON.parse(localStorage.getItem("history"));
  } else {
    return [];
  }
};

type newItem = {
  date: string;
  value: string;
};

export const ChangesHistory = () => {
  const [value, setValue] = useState<string>("");
  const [history, setHistory] = useState<newItem[]>(getLocalStorage());

  function getDate() {
    const today = new Date();
    const month = today.getMonth() + 1;
    const year = today.getFullYear();
    const date = today.getDate();

    const hours = today.getHours();
    const minutes = today.getMinutes();
    const seconds = today.getSeconds();
    return `${date}/${month}/${year}, ${hours}:${minutes}:s${seconds}`;
  }

  const handleBlur: ChangeEventHandler<HTMLInputElement> = () => {
    const date = getDate();
    const newItem = { date: date, value: value };
    setHistory([...history, newItem]);
    console.log(history);
  };

  useEffect(() => {
    localStorage.setItem("history", JSON.stringify(history));
  }, [history]);
  return (
    <div>
      <Input
        label="Type something..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onBlur={handleBlur}
      />
      <p className="font-bold my-2">History</p>
      <ul>
        {history.map((item, index) => {
          const { date, value } = item;
          return (
            <li key={index}>
              {date}, {value}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
