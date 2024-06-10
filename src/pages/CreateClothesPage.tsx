import { useNavigate } from "react-router-dom";
import { routes } from "../routes";
import { CreateClothesForm } from "../features/Clothes/CreateClothesForm";
import { CreateClothesDto } from "../types/Clothes";
import { createClothes } from "../services/clothes";

export const CreateClothesPage = () => {
  const navigate = useNavigate();

  const handleSubmit = async (data: CreateClothesDto) => {
    // console.log({ data });
    await createClothes(data);
    navigate(routes.CLOTHES.path);
  };
  return (
    <div>
      <h1 className="dark: text-slatte-300">Create product</h1>
      <CreateClothesForm onSubmit={handleSubmit} />
    </div>
  );
};
