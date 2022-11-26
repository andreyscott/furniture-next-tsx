import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    colorPrimary: "#f49034",
    colorText: "#545454",
    colorWhite: "white",
    bgPrimary: "rgb(47, 51, 58)",
  },
  //   fonts: ["sans-serif", "Roboto"],
  transitions: {
    trMain: "all 0.3s ease",
  },
};

const Theme = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Theme;
