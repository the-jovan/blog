import { defineStyleConfig } from "@chakra-ui/react";

const Link = defineStyleConfig({
  baseStyle: {},
  variants: {
    navigation: {
      display: "block",
      padding: "2rem",
      // background: "blue",
      _hover: {
        background: "blue",
        color: "white",
        textDecoration: "none",
      },
    },
  },
});

export default Link;
