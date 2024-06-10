// import { useSortData } from "../../hooks/useSortData";

// export const UsersData = () => {
//   const users = [
//     { id: 1, nickname: "john", age: 45 },
//     { id: 2, nickname: "olivier", age: 32 },
//     { id: 3, nickname: "macgyver", age: 65 },
//   ];

//   //   const sort = users.sort((a, b) => (a.age > b.age ? 1 : -1));
//   //   console.log(sort);
//   const sortedUsers = useSortData(users);

//   return (
//     <div>
//       {sortedUsers.map((user, i) => (
//         <p key={i}>
//           {user.nickname}
//           {user.age}
//         </p>
//       ))}
//     </div>
//   );
// };

import { MouseEventHandler, useState } from "react";
import { useSortData } from "../../hooks/useSortData";
import { Button } from "../../ui";

export const UsersData = () => {
  // const [sortData,setSortData] = useState(false)
  const [users, setUsers] = useState([
    { id: 1, nickname: "john", age: 45 },
    { id: 2, nickname: "olivier", age: 32 },
    { id: 3, nickname: "macgyver", age: 65 },
  ]);

  const sortedUsers = useSortData(users);

  // const sortData: MouseEventHandler<HTMLButtonElement> = () => {
  //   const sortedUsers = useSortData(users);
  //   setUsers(sortedUsers)
  // };

  return (
    <div>
      <Button label="Sort users - UP" />
      <Button label="Sort users - DOWN" />
      {sortedUsers.map((user, i) => (
        <p key={i}>
          {user.nickname}
          {user.age}
        </p>
      ))}
    </div>
  );
};
