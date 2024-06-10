type Props = {
  children: string;
};

export const Header = ({ children }: Props) => {
  return <p className="font-bold my-3 text-lg">{children}</p>;
};
