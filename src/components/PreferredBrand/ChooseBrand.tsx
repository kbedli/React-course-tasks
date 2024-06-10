import { MouseEventHandler, useState } from "react";
import { Brand, useBrandContext } from "./BrandContext";
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";
import { Button } from "../../ui";

export const ChooseBrand = () => {
  const context = useBrandContext();

  const chooseCocaCola: MouseEventHandler<HTMLButtonElement> = () => {
    context.brand.current = Brand.COCACOLA;
    context.select();
    console.log(context.brand.current);
  };

  const chooseTwitter: MouseEventHandler<HTMLButtonElement> = () => {
    context.brand.current = Brand.TWITTER;
    context.select();
    console.log(context.brand.current);
  };

  const chooseStarbucks: MouseEventHandler<HTMLButtonElement> = () => {
    context.brand.current = Brand.STARBUCKS;
    context.select();
  };

  return (
    <>
      <Button label="Coca-cola" onClick={chooseCocaCola} />
      <Button label="Twitter" onClick={chooseTwitter} />
      <Button label="Starbucks" onClick={chooseStarbucks} />
      <div className={context.props}>CatHW544B5354 45B3453 5SE TR ERT</div>
    </>
  );
};
