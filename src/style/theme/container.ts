import { defineStyleConfig } from "@chakra-ui/react";

const Container = defineStyleConfig({
  baseStyle: {
    width: {
      sm: "100%",
      md: "620px",
      lg: "1366px",
    },
    maxW: {
      lg: "80%",
    },
  },
  variants: {
    header: {
      display: "flex",
      alignItems: "center",
      color: "black",
      borderBottom: "2px solid",
      borderColor: "black",
    },
  },
});

export default Container;
