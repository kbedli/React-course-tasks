import { ChooseBrand } from "../components/Brand/ChooseBrand";
import { SortData } from "../components/SortData/SortData";
import { users } from "../components/SortData/UsersData";

export const Module3 = () => {
  return (
    <>
      <p>Zadanie 1</p>
      <SortData data={users} />
      <p>Zadanie 2</p>
      <ChooseBrand />
    </>
  );
};
