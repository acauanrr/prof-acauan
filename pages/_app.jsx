import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "../utils/theme";
import LandingLayout from "../components/layouts/LandingLayout";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <LandingLayout>
        <Component {...pageProps} />
      </LandingLayout>
    </ChakraProvider>
  );
}

export default MyApp;
