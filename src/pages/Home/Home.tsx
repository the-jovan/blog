import { Container } from "@chakra-ui/react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <Container>
      <Link to="/posts">Posts</Link>
      Ic houm
    </Container>
  );
}

export default Home;
