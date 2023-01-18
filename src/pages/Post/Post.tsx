import { useQuery } from "@tanstack/react-query";
import { fetchContentfulStuff, fetchContentfulThing } from "../../api/temp";
import { Link, useLocation } from "react-router-dom";

function Post() {
  const location = useLocation();
  const id = location.state;

  const results = useQuery(["post", `${id}`], fetchContentfulThing, {
    staleTime: Infinity,
    enabled: !!id,
  });

  const allResults = useQuery(["posts"], fetchContentfulStuff, {
    staleTime: Infinity,
    enabled: !!!id,
  });

  let isError, isLoading, data;

  if (!!id) {
    isError = results.isError;
    isLoading = results.isLoading;
    data = results.data;
  } else {
    isError = allResults.isError;
    isLoading = allResults.isLoading;
    data = allResults?.data?.items.find((i: any) => {
      return i.fields.slug === location.pathname.split("/").pop();
    });
  }

  if (isError) {
    return <div>Query's error</div>;
  }

  if (isLoading) {
    return <div>Loading lololo</div>;
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
