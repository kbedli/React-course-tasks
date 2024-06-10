export const useSortData = (users) => {
  const sortedUsers = users.sort((a, b) => (a.age > b.age ? 1 : -1));
  return sortedUsers;
};

// import { useState } from "react";

// export const useSortData = (users) => {
//   const [list, setList] = useState(users);

//   const sortedUsers = list.sort((a, b) => (a.age > b.age ? 1 : -1));
//   setList(sortedUsers);

//   return list;
// };
