import { useState, createContext } from "react";

export const ColorModeContext = createContext({
  mode: "",
  setMode: () => {
    alert("Você precisa me configurar primeiro!");
  },
  toggleMode: () => {
    alert("Você precisa me configurar primeiro!");
  },
});

export default function ColorModeProvider(props) {
  const [mode, setMode] = useState(props.initialMode);

  function toggleMode() {
    mode === "dark" ? setMode("light") : setMode("dark");
  }

  return (
    <ColorModeContext.Provider
      value={{ mode: mode, setMode: setMode, toggleMode: toggleMode }}
    >
      {props.children}
    </ColorModeContext.Provider>
  );
}
