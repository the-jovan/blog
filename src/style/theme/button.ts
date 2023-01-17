import { defineStyleConfig } from "@chakra-ui/react";

const Button = defineStyleConfig({
  baseStyle: {
    color: "red",
    background: "orange",
  },
  variants: {
    blue: {
      color: "blue",
    },
    green: {
      color: "green",
    },
  },
});

export default Button;
