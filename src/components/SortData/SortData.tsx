import { sortUsers } from "../../hooks/sortUsers";
import { User } from "./UsersData";

type Props = {
  data: User[];
};

export const SortData = ({ data }: Props) => {
  const sortedData = sortUsers(data, "nickname", "asc");

  return (
    <>
      {sortedData.map((user) => (
        <div key={user.id}>{user.nickname}</div>
      ))}
    </>
  );
};
