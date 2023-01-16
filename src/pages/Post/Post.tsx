import { useQuery } from "@tanstack/react-query";
import { fetchContentfulThing } from "../../api/temp";
import { Link, useParams } from "react-router-dom";

function Post() {
  const { id } = useParams();
  const results = useQuery(["post", `${id}`], fetchContentfulThing, {
    staleTime: Infinity,
  });

  const { isError, isLoading, data } = results;

  if (isError) {
    return <div>Error lololo</div>;
  }

  if (isLoading) {
    return <div>Loading lololo</div>;
  }

  return (
    <div>
      <Link to="/posts">Back</Link>
      <hr />
      {data.fields.title}
    </div>
  );
}

export default Post;
