import { extendTheme } from "@chakra-ui/react";

import global from "./global";
import Button from "./button";

const customTheme = {
  styles: {
    global,
  },
  components: {
    Button,
  },
};

export default extendTheme(customTheme);
