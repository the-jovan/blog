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
    return <div>Query's error</div>;
  }

  if (isLoading) {
    return <div>Loading lololo</div>;
  }

  if (data) {
    console.log("data", data);
  }

  return (
    <div>
      <Link to="/posts">Back</Link>
      <hr />
      <h1>{data.fields.title}</h1>
      <div>
        {data.metadata.tags.map((tag: any) => (
          <div key={tag.sys.id}>{tag.sys.id}</div>
        ))}
      </div>
      <div>
        {data.fields.description.content.map((item: any, i: number) => (
          <p key={i}>{item.content[0].value}</p>
        ))}
      </div>
    </div>
  );
}

export default Post;
