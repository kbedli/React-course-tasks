type Props = {
  children: string | string[] | number;
};

export const Text = ({ children }: Props) => {
  return (
    <p className="dark:text-slate-300 font-bold my-3 text-lg">{children}</p>
  );
};
