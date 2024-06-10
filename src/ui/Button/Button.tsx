import { ComponentProps } from "react";
import { cn } from "../../utils/cn";

type Props = {
  label: string;
  // onClick: MouseEventHandler<HTMLButtonElement>;
} & ComponentProps<"button">;

export const Button = ({ label, className, ...rest }: Props) => {
  return (
    <button
      className={cn(
        `px-4 py-1 text-sm text-white bg-blue-600 rounded-full border border-blue-200 cursor-pointer hover:bg-blue-500 disabled:bg-slatte-400`,
        className
        // { "bg-red-500": disabled }
      )}
      {...rest}
    >
      {label}
    </button>
  );
};
