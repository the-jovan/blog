import { defineStyleConfig } from "@chakra-ui/react";

const Container = defineStyleConfig({
  baseStyle: {},
  variants: {
    header: {
      display: "flex",
      alignItems: "center",
      width: {
        sm: "100%",
        md: "620px",
        lg: "1366px",
      },
      maxW: {
        lg: "80%",
      },
      color: "black",
      background: "white",
      borderBottom: "2px solid",
      borderColor: "black",
    },
  },
});

export default Container;
