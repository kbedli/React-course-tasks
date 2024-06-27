import { User } from "../components/SortData/UsersData";

enum Direction {
  ASC = "asc",
  DESC = "desc",
}

type DataKey = keyof User;

export const sortUsers = (
  data: User[],
  field: DataKey,
  direction: Direction
) => {
  return data.sort((a, b) => {
    const nameA = a[field];
    const nameB = b[field];
    if (direction === Direction.ASC) {
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
    }
    if (direction === Direction.DESC) {
      if (nameA > nameB) {
        return -1;
      }
      if (nameA < nameB) {
        return 1;
      }
    }

    return 0;
  });
};
