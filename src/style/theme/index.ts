import { extendTheme } from "@chakra-ui/react";

import Button from "./button";
import Container from "./container";
import Link from "./link";

const customTheme = {
  fonts: {
    body: `"Vazir", sans-serif`,
  },
  breakpoints: {
    sm: "48px",
    md: "768px",
    lg: "1024px",
  },
  colors: {
    white: "#fffcff",
    lightgrey: "#c2bec2",
    black: "#170a1c",
    blue: "#39a2ae",
  },
  styles: {
    global: {
      body: {
        background: "#ececec",
      },
    },
  },
  components: {
    Button,
    Container,
    Link,
  },
};

export default extendTheme(customTheme);
