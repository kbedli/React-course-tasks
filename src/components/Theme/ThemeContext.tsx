import { createContext, useContext, useEffect, useRef } from "react";

export enum Theme {
  LIGHT = "light",
  DARK = "dark",
}

type ThemeContextType = {
  theme: React.MutableRefObject<Theme>;
  // theme: Theme;
  toggle: () => void;
};

const ThemeContext = createContext<ThemeContextType | null>(null);
ThemeContext.displayName = "ThemeContext";

export const useThemeContext = () => {
  const context = useContext(ThemeContext);
  if (context) {
    return context;
  }
  throw new Error("Component should be placed inside ThemeContextProvider");
};

export const getMode = () => {
  if (window.matchMedia) {
    const matchesLightMode = window.matchMedia(
      "(prefers-color-scheme: light)"
    ).matches;
    return matchesLightMode ? Theme.LIGHT : Theme.DARK;
  }
  return null;
};

const useTheme = () => {
  // const [theme, setTheme] = useState<Theme>(Theme.LIGHT);
  // const theme = useRef<Theme>(Theme.LIGHT);
  const theme = useRef<Theme | null>(getMode());

  useEffect(() => {
    const themeMode = getMode();
    if (themeMode === Theme.DARK) {
      document.body.classList.add("dark");
    }
  }, []);

  const toggle = () => {
    if (theme.current === Theme.DARK) {
      // setTheme(Theme.LIGHT);
      theme.current = Theme.LIGHT;
      document.body.classList.remove("dark");
      document.body.classList.remove("twitter");
      document.body.classList.remove("cocacola");
      document.body.classList.remove("starbucs");
      document.body.classList.add("white");

      document.body.classList.remove("starbucs");
    } else {
      theme.current = Theme.DARK;
      // setTheme(Theme.DARK);
      document.body.classList.add("dark");
      document.body.classList.remove("twitter");
      document.body.classList.remove("cocacola");
      document.body.classList.remove("starbucs");
      document.body.classList.remove("white");
    }
  };

  return { theme, toggle };
};

export const ThemeContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <ThemeContext.Provider value={useTheme()}>{children}</ThemeContext.Provider>
  );
};
