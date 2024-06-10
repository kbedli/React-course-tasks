import { Text } from "../ui";
import { type ProductDto } from "../types/Product";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ProductDetails } from "../features/Products/ProductDetails";
import { fetchProduct } from "../services/products";
import { useApi } from "../hooks/useApi";

export const ProductDetailsPage = () => {
  // const [data, setData] = useState<ProductDto | null>(null);
  // const [isLoading, setIsLoading] = useState(true);
  // const [isError, setIsError] = useState(false);
  const { id } = useParams();
  const { data, isLoading, isError } = useApi<ProductDto>(() =>
    fetchProduct(id)
  );

  // useEffect(() => {
  //   if (id) {
  //     fetchProduct(id)
  //       .then((responseData) => {
  //         setData(responseData);
  //         setIsLoading(false);
  //       })
  //       .catch(() => {
  //         setIsError(true);
  //       });
  //   }
  // }, [id]);

  return (
    <div>
      <Text>Product</Text>
      {isLoading && <p>Loading...</p>}
      {isError && <p>Oh no! Error!</p>}
      {data && <ProductDetails product={data} />}
    </div>
  );
};
