import { ReactNode } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "../style/theme";

import "@fontsource/vazir/500.css";
import "@fontsource/vazir/700.css";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const queryClient = new QueryClient();

function Providers({ children }: { children: ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider theme={theme}>{children}</ChakraProvider>
    </QueryClientProvider>
  );
}

export default Providers;
