import { ChangeEventHandler, MouseEventHandler, useContext } from "react";
import { BrandContext } from "./BrandContext";

import Select from "react-select";
import { Button } from "../../ui";

export const ChooseBrand = () => {
  const { brand, chooseCocaCola, chooseWebAmigos, chooseSprite, brands } =
    useContext(BrandContext);

  const options = brands.map((brand: string) => {
    return { value: brand, label: brand };
  });

  const switchTheme = (selectedOption: { value: string }) => {
    if (selectedOption.value === "Coca-cola") {
      chooseCocaCola();
    }
    if (selectedOption.value === "Web-Amigos") {
      chooseWebAmigos();
    }
    if (selectedOption.value === "Sprite") {
      chooseSprite();
    }

    console.log(selectedOption);
  };
  return (
    <>
      <Select options={options} onChange={switchTheme} />
      <p>Hello</p>
      <p>{brand.companyName}</p>
      <Button label="Coca-cola" onClick={chooseCocaCola} />
      <Button label="Web Amigos" onClick={chooseWebAmigos} />
      <Button label="Sprite" onClick={chooseSprite} />

      <div className={`bg-${brand.colors.bgColor} px-6 pt-6 pb-10 mt-5`}>
        <img src={brand.logoUrl} alt="Logo" className="h-10 " />
        <h2
          className={`text-${brand.colors.primary}  my-6 italic bold text-2xl`}
        >
          {brand.companyName}
        </h2>
        <p className={`text-${brand.colors.secondary}`}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
          voluptatibus doloremque odit aliquid, porro nulla nostrum totam, fuga
          voluptates neque fugiat architecto voluptas, repudiandae maiores
          corrupti laudantium cupiditate. Neque, unde?
        </p>
      </div>
    </>
  );
};
