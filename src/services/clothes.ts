import axios, { AxiosResponse } from "axios";
import { ClothesDto, CreateClothesDto } from "../types/Clothes";

const API_BASE_URL = "https://api.airtable.com/v0/appTawWCGSjVgGU1h/Clothes";

const headers = {
  Authorization: `Bearer ${import.meta.env.VITE_AIRTABLE_API_TOKEN_CLOTHES}`,
  "Content-type": "application/json",
};

export const fetchClothes = async (): Promise<ClothesDto[]> => {
  try {
    const response: AxiosResponse = await axios.get(`${API_BASE_URL}`, {
      headers,
    });

    const responseData: ClothesDto[] = response.data.records;

    return responseData;
  } catch (error) {
    throw new Error("Invalid response");
  }
};

// export const createClothes = (data: CreateClothesDto): Promise<void> => {
//   return fetch(`${API_BASE_URL}`, {
//     headers,
//     method: "POST",
//     body: JSON.stringify({ records: [{ fields: data }] }),
//   }).then((response) => {
//     if (response.ok) {
//       return response.json();
//     }
//     throw new Error("Invalid response");
//   });
// };

export const createClothes = async (data: CreateClothesDto): Promise<void> => {
  try {
    const responseData = { records: [{ fields: data }] };
    const response: AxiosResponse = await axios.post(
      "https://api.airtable.com/v0/appTawWCGSjVgGU1h/Clothes",
      responseData,
      {
        headers,
      }
    );

    return response.data;
  } catch (error) {
    throw new Error("Invalid response");
  }
};
