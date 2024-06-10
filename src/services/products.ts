import { CreateProductDto, ProductDto } from "../types/Product";

export type AirtableListREsponse<T> = {
  records: T;
};

const API_BASE_URL = "https://api.airtable.com/v0/app0CojGXDcvZ8HbZ/Table%201";

const headers = {
  Authorization: `Bearer ${import.meta.env.VITE_AIRTABLE_API_TOKEN}`,
  "Content-type": "application/json",
};

export const fetchProducts = (): Promise<
  AirtableListREsponse<ProductDto[]>
> => {
  return fetch(`${API_BASE_URL}`, {
    headers,
  }).then((response) => {
    if (response.ok) {
      return response.json();
    }
    throw new Error("Invalid response");
  });
};

export const fetchProduct = (
  id: ProductDto["id"] | undefined
): Promise<ProductDto> => {
  if (!id) {
    throw new Error("Invalid id");
  }
  return fetch(`${API_BASE_URL}/${id}`, {
    headers,
  }).then((response) => {
    if (response.ok) {
      return response.json();
    }
    throw new Error("Invalid response");
  });
};

export const createProduct = (data: CreateProductDto): Promise<void> => {
  return fetch(`${API_BASE_URL}`, {
    headers,
    method: "POST",
    body: JSON.stringify({ records: [{ fields: data }] }),
  }).then((response) => {
    if (response.ok) {
      return response.json();
    }
    throw new Error("Invalid response");
  });
};
