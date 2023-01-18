import { ReactNode } from "react";
import { Link as ChakraLink } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

interface LinkProps {
  children: ReactNode;
  to: string;
  variant?: string;
  props?: {
    [key: string]: string;
  };
}

const CustomLink = ({ children, to, variant, props }: LinkProps) => {
  return (
    <ChakraLink as={RouterLink} to={to} variant={variant} {...props}>
      {children}
    </ChakraLink>
  );
};

export default CustomLink;
