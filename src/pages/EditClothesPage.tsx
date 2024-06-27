import { useNavigate, useParams } from "react-router-dom";
import { routes } from "../routes";
import { ClothesDto, CreateClothesDto } from "../types/Clothes";
import { editClothes, fetchCloth } from "../services/clothes";
import { EditClothesForm } from "../features/Clothes/EditClothesForm";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const EditClothesPage = () => {
  const [clothData, setClothData] = useState<ClothesDto | null>(null);
  const navigate = useNavigate();
  const { id } = useParams();

  const notify = () =>
    new Promise(() => toast.info("Congratulations, you edited the item!"));

  const handleSubmit = async (data: CreateClothesDto) => {
    await editClothes(id, data);
    await notify();

    navigate(routes.CLOTHES.path);
  };

  //tu pobierane są dane produktu aby użyć ich jako wpisane już początkowe wartości formularza, niestety dalej wyświetlają się puste pola
  useEffect(() => {
    if (id) {
      fetchCloth(id)
        .then((responseData) => {
          setClothData(responseData);
        })
        .catch(() => {
          throw new Error("Invalid response");
        });
    }
  }, [id]);

  return (
    <div>
      <h1 className="dark: text-slatte-300">Edit product</h1>
      <ToastContainer position="top-center" />
      <EditClothesForm onSubmit={handleSubmit} clothData={clothData} />
    </div>
  );
};
