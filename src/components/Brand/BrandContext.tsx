import { createContext, useState } from "react";

type Brand = {
  companyName: string;
  logoUrl: string;
  colors: {
    primary: string;
    secondary: string;
    bgColor: string;
  };
};

type contextType = {
  brand: Brand;
  brands: string[];
  chooseCocaCola: () => void;
  chooseWebAmigos: () => void;
  chooseSprite: () => void;
};

const webAmigosBrand: Brand = {
  companyName: "Web Amigos",
  logoUrl:
    "https://scontent.fwaw3-1.fna.fbcdn.net/v/t39.30808-6/356090529_285543027372793_2494872995902446215_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_ohc=dTE6CNLBkvUQ7kNvgHlZQ-D&_nc_ht=scontent.fwaw3-1.fna&oh=00_AYDuNFfFoqZhIUDj5z20NtYD9kYSrDHhNUBYBMQSenmZ0Q&oe=6670E96C",
  colors: {
    primary: "black",
    secondary: "black",
    bgColor: "yellow-400",
  },
};

const cocaCola: Brand = {
  companyName: "Coca-Cola",
  logoUrl:
    "https://upload.wikimedia.org/wikipedia/commons/c/ce/Coca-Cola_logo.svg",
  colors: {
    primary: "white",
    secondary: "red-500",
    bgColor: "black",
  },
};

const sprite: Brand = {
  companyName: "Sprite",
  logoUrl:
    "https://e7.pngegg.com/pngimages/284/836/png-clipart-sprite-logo-sprite-logo-food-sprite.png",
  colors: {
    primary: "yellow-300",
    secondary: "white",
    bgColor: "green-600",
  },
};

const brands = ["Coca-cola", "Web-Amigos", "Sprite"];

export const BrandContext = createContext<contextType>({
  brand: webAmigosBrand,
  brands: brands,
  chooseCocaCola: function (): void {
    throw new Error("Function not implemented.");
  },
  chooseWebAmigos: function (): void {
    throw new Error("Function not implemented.");
  },
  chooseSprite: function (): void {
    throw new Error("Function not implemented.");
  },
});

export const BrandProvider = ({ children }: { children: React.ReactNode }) => {
  const [brand, setBrand] = useState<Brand>(webAmigosBrand);

  const chooseCocaCola = () => {
    setBrand(cocaCola);
  };

  const chooseWebAmigos = () => {
    setBrand(webAmigosBrand);
  };

  const chooseSprite = () => {
    setBrand(sprite);
  };

  return (
    <BrandContext.Provider
      value={{ brand, brands, chooseCocaCola, chooseWebAmigos, chooseSprite }}
    >
      {children}
    </BrandContext.Provider>
  );
};
