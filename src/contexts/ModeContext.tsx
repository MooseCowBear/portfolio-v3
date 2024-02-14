import { ReactNode, createContext, useContext, useState } from "react";

type ModeContextProviderProps = {
  children: ReactNode;
};

type ModeContextType = {
  dark: boolean;
  setDark: React.Dispatch<React.SetStateAction<boolean>>;
};

const ModeContext = createContext<ModeContextType | null>(null);

export function useModeContext() {
  const value = useContext(ModeContext);
  if (value === null) throw Error("Can't be used outside ModeContextProvider");
  return value;
}

const setInitialTheme = () => {
  const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

  if (prefersDarkScheme.matches) {
    document.body.classList.add("dark-theme");
    return true;
  }
  return false;
};

export function ModeProvider({ children }: ModeContextProviderProps) {
  const [dark, setDark] = useState(setInitialTheme());

  return (
    <ModeContext.Provider
      value={{
        dark,
        setDark,
      }}
    >
      {children}
    </ModeContext.Provider>
  );
}
