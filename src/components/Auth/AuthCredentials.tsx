import { MouseEventHandler } from "react";
import { useAuthContext } from "./AuthContext";
import { Button, Text } from "../../ui";

export const AuthCredentials = () => {
  const { isLoggedIn, toggleValue, logIn, logOut } = useAuthContext();

  const handleClick: MouseEventHandler<HTMLButtonElement> = () => {
    toggleValue();
  };

  return (
    <div>
      <Text>Is user logged? {isLoggedIn ? "YES" : "NO"}</Text>
      <Button label="Toggle" onClick={handleClick} />
      <Button label="Log In" onClick={logIn} />
      <Button label="Log Out" onClick={logOut} />
    </div>
  );
};
