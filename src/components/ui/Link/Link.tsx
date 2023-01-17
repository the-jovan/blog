import { ReactNode } from "react";
import { Link as ChakraLink } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

interface ChildrenProps {
  children: ReactNode | string;
}

interface LinkProps {
  to: string;
  [key: string]: string | boolean;
}

const CustomLink = ({ children, to, ...props }: ChildrenProps & LinkProps) => {
  return (
    <ChakraLink as={RouterLink} to={to} {...props}>
      {children}
    </ChakraLink>
  );
};

export default CustomLink;
