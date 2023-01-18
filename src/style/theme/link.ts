import { defineStyleConfig } from "@chakra-ui/react";

const Link = defineStyleConfig({
  baseStyle: {},
  variants: {
    navigation: {
      display: "block",
      padding: "2rem",
      _hover: {
        background: "blue",
        color: "white",
        textDecoration: "none",
      },
    },
    breadcrumb: {
      textTransform: "capitalize",
      color: "lightgrey",
    },
  },
});

export default Link;
