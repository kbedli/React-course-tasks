import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import "./App.css";
import { AuthContextProvider } from "./components/Auth/AuthContext";
import { ChangesHistory } from "./components/ChangesHistory";
import { ComponentGenerator } from "./components/ComponentGenerator";
// import { Counter } from "./components/Counter";
import { DynamicForm } from "./components/DynamicForm/DynamicForm";
import { FormWizard } from "./components/FormWizard";
import { UsersData } from "./components/SortData/UsersData";

import { ThemeContextProvider } from "./components/Theme/ThemeContext";
import { ThemeSwitcher } from "./components/Theme/ThemeSwitcher";
import { ViewPort } from "./components/ViewPort";
import { router } from "./routes";
import { ErrorBoundary } from "./components/ErrorBoundary";
// import { AuthInfo } from "./components/Auth/AuthInfo";
import { ChooseBrand } from "./components/PreferredBrand/ChooseBrand";
import { BrandContextProvider } from "./components/PreferredBrand/BrandContext";
import { AddUser } from "./components/AppUsers/AddUser2";
import { store } from "./store";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <ErrorBoundary
        fallback={<p className="dark:text-slate-300">General Error</p>}
      >
        <QueryClientProvider client={queryClient}>
          {/* The rest of your application */}

          <Provider store={store}>
            {/* <ViewPort /> */}
            <ThemeContextProvider>
              <ThemeSwitcher />
              <AuthContextProvider>
                <RouterProvider router={router} />
              </AuthContextProvider>
              <ErrorBoundary>{/* <AuthInfo /> */}</ErrorBoundary>
            </ThemeContextProvider>
          </Provider>
          {/* <UsersData /> */}
          <BrandContextProvider>{/* <ChooseBrand /> */}</BrandContextProvider>
          <ReactQueryDevtools initialIsOpen={true} />
        </QueryClientProvider>
      </ErrorBoundary>
      {/* <AddUser /> */}
    </>
  );
}

export default App;
