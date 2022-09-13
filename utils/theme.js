import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  fonts: {
    heading: `'DM Mono', monospace`,
    body: `'Raleway', sans-serif`,
  },
  colors: {
    primary: {
      100: "#caf0f8",
      200: "#ade8f4",
      300: "#90e0ef",
      400: "#48cae4",
      500: "#00b4d8",
      600: "#0096c7",
      700: "#0077b6",
      800: "#023e8a",
      900: "#03045e",
    },
    paletaCool: {
      "bg": "#124559",
    }
  },
});
