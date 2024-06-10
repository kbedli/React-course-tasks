import { createContext, useContext, useState } from "react";

type AuthContextType = {
  isLoggedIn: boolean;
  toggleValue: () => void;
  logIn: () => void;
  logOut: () => void;
};

// const defaultValues = {
//   isLoggedIn: false,
//   toggleValue: () => null,
//   logIn: () => null,
//   logOut: () => null,
// };

export const AuthContext = createContext<AuthContextType | null>(null);

export const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (context === null) {
    throw new Error(
      "Oh no! Component should be placed inside AuthContextProvider"
    );
  }
  return context;
};

const useAuth = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const toggleValue = () => setIsLoggedIn((value) => !value);
  const logIn = () => setIsLoggedIn(true);
  const logOut = () => setIsLoggedIn(false);

  return { isLoggedIn, toggleValue, logIn, logOut };
};

export const AuthContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { isLoggedIn, toggleValue, logIn, logOut } = useAuth();

  return (
    <AuthContext.Provider value={{ isLoggedIn, toggleValue, logIn, logOut }}>
      {children}
    </AuthContext.Provider>
  );
};
