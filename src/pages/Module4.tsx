import { useEffect, useState } from "react";
import { ClothesList } from "../features/Clothes/ClothesList";
import { ClothesDto } from "../types/Clothes";

import { fetchClothes } from "../services/clothes";
import { useApi } from "../hooks/useApi";
import { routes } from "../routes";
import { Link } from "react-router-dom";

export const Module4 = () => {
  // const [data, setData] = useState<ClothesDto[]>([]);
  // const [isLoading, setIsLoading] = useState(true);
  // const [isError, setIsError] = useState(false);

  // Zadanie 1

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response: AxiosResponse = await axios.get(
  //         "https://api.airtable.com/v0/appTawWCGSjVgGU1h/Clothes",
  //         {
  //           headers: {
  //             Authorization: `Bearer ${import.meta.env.VITE_AIRTABLE_API_TOKEN_CLOTHES}`,
  //           },
  //         }
  //       );

  //       const responseData: ClothesDto[] = response.data.records;

  //       setData(responseData);
  //     } catch (error) {
  //       throw new Error("Invalid response");
  //     }
  //   };
  //   fetchData();
  // }, []);

  // Zadanie 2, 3 - korzystanie z usługi pobierania danych (services -> clothes.ts)

  // useEffect(() => {
  //   fetchClothes()
  //     .then((data) => {
  //       setData(data);
  //       setIsLoading(false);
  //     })
  //     .catch(() => {
  //       setIsError(true);
  //     });
  // }, []);

  //Zadanie 4, 5 - korzystanie z hooka useApi

  const { data, isLoading, isError } = useApi<ClothesDto[]>(fetchClothes);
  return (
    <>
      <p>Module 4</p>
      {isLoading && <p>Loading...</p>}
      {isError && <p>Oh no! Error!</p>}
      {data && <ClothesList clothes={data} />}
      <div>
        <Link to={routes.CREATE_CLOTHES.path} className="text-blue-500">
          Create product
        </Link>
      </div>
    </>
  );
};
