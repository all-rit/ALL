import { createContext } from "react";
const FontSizeContext = createContext({
  h2FontSize: "",
  seth2FontSize: () => {},
  h3FontSize: "",
  seth3FontSize: () => {},
  h5FontSize: "",
  seth5FontSize: () => {},
  pFontSize: "",
  setpFontSize: () => {},
});

export default FontSizeContext;
