import { Fragment } from "react";
import { fetchContentfulStuff } from "../../api/temp";
import { useQuery } from "@tanstack/react-query";
import { Container } from "@chakra-ui/react";

import PostCard from "../../components/features/PostCard";

function Posts() {
  const resp = useQuery(["posts"], fetchContentfulStuff, {
    staleTime: Infinity,
  });
  const { isLoading, isError, data } = resp;

  if (isLoading) {
    return <div>loading</div>;
  }

  if (isError) {
    return <div>Posts error</div>;
  }

  return (
    <Container>
      {data.items.map((item: any) => {
        return (
          <Fragment key={item.sys.id}>
            <PostCard
              createdAt={item.sys.createdAt}
              id={item.sys.id}
              slug={item.fields.slug}
              title={item.fields.title}
              img=""
            />
          </Fragment>
        );
      })}
    </Container>
  );
}

export default Posts;
