import { cn } from "../../utils/cn";

type Props = {
  text: string;
  color: string;
  isActive: boolean;
};

export const Paragraph = ({ text, color, isActive }: Props) => {
  return (
    <p
      className={cn(`font-bold my-4 text-lm text-${color}`, {
        "bg-green-500": isActive,
        "bg-red-500": !isActive,
      })}
    >
      {text}
    </p>
  );
};
