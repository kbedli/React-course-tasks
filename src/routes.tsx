import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./components/Layout/Layout";
import { HomePage } from "./pages/HomePage";
import { CounterPage } from "./pages/CounterPage";
import { GeneratorPage } from "./pages/GeneratorPage";
import { RegistrationPage } from "./pages/RegistrationPage";
import { StepperPage } from "./pages/StepperPage";
import { Module2 } from "./pages/Module2";
import { ProductPage } from "./pages/ProductsPage";
import { ProductDetailsPage } from "./pages/ProductsDetailsPage";
import { CreateProductPage } from "./pages/CreateProductPage";
import { Module4 } from "./pages/Module4";
import { CreateClothesPage } from "./pages/CreateClothesPage";

export const routes = {
  HOME: {
    path: "/",
  },
  COUNTER: {
    path: "/counter",
  },
  GENERATOR: {
    path: "/generator",
  },
  REGISTRATION: {
    path: "/registration",
  },
  STEPPER: {
    path: "/stepper",
  },
  MODULE_2: {
    path: "/forms",
  },
  PRODUCTS: {
    path: "/products",
  },
  PRODUCT_DETAILS: {
    path: "/products/:id",
  },
  CREATE_PRODUCT: {
    path: "/products/create",
  },
  CLOTHES: {
    path: "/clothes",
  },
  CREATE_CLOTHES: {
    path: "/clothes/create",
  },
};

export const router = createBrowserRouter([
  {
    path: routes.HOME.path,
    element: <Layout />,
    children: [
      { path: routes.HOME.path, element: <HomePage /> },
      { path: routes.COUNTER.path, element: <CounterPage /> },
      { path: routes.GENERATOR.path, element: <GeneratorPage /> },
      { path: routes.REGISTRATION.path, element: <RegistrationPage /> },
      { path: routes.STEPPER.path, element: <StepperPage /> },
      { path: routes.MODULE_2.path, element: <Module2 /> },
      { path: routes.PRODUCTS.path, element: <ProductPage /> },
      { path: routes.PRODUCT_DETAILS.path, element: <ProductDetailsPage /> },
      { path: routes.CREATE_PRODUCT.path, element: <CreateProductPage /> },
      { path: routes.CLOTHES.path, element: <Module4 /> },
      { path: routes.CREATE_CLOTHES.path, element: <CreateClothesPage /> },
    ],
  },
]);
