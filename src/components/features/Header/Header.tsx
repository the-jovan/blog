import { Box, Container, Flex } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import Link from "../../ui/Link";

function Header() {
  return (
    <>
      <Container as="header" variant="header">
        <Box flex="1">Logo part</Box>
        <Flex flex="1" as="nav" align="center" justifyContent="flex-end">
          <Link to="/" variant="navigation">
            Home
          </Link>
          <Link to="/posts" variant="navigation">
            Posts
          </Link>
        </Flex>
      </Container>
      <Outlet />
    </>
  );
}

export default Header;
