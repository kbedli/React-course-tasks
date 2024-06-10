import { createContext, useContext, useEffect, useRef, useState } from "react";

export enum Brand {
  COCACOLA = "cocacola",
  STARBUCKS = "starbucks",
  TWITTER = "twitter",
}

type BrandContextType = {
  brand: React.MutableRefObject<Brand | null>;
  props: string;

  select: () => void;
};

const BrandContext = createContext<BrandContextType | null>(null);
BrandContext.displayName = "BrandContext";

export const useBrandContext = () => {
  const context = useContext(BrandContext);
  if (context) {
    return context;
  }
  throw new Error("Component should be placed inside BrandContextProvider");
};

const useBrand = () => {
  const brand = useRef<Brand | null>(Brand.COCACOLA);

  const [props, setProps] = useState<string>("");

  const select = () => {
    if (brand.current === Brand.COCACOLA) {
      // setProps("bg-red-600");
      document.body.classList.add("cocacola");
      document.body.classList.remove("dark");
      document.body.classList.remove("twitter");
      document.body.classList.remove("starbucs");
      document.body.classList.remove("white");
      console.log("wybrano cocacole");
    } else if (brand.current === Brand.STARBUCKS) {
      // setProps("bg-yellow-600");

      console.log("wybrano starbucs");
    } else if (brand.current === Brand.TWITTER) {
      setProps("bg-blue-600");
      document.body.classList.add("twitter");
      document.body.classList.remove("cocacola");
      document.body.classList.remove("dark");
      document.body.classList.remove("white");
      document.body.classList.remove("starbucs");
      console.log("wybrano twitter");
    }
  };

  return { brand, select, props };
};

export const BrandContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <BrandContext.Provider value={useBrand()}>{children}</BrandContext.Provider>
  );
};
