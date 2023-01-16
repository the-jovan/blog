import { Link } from "react-router-dom";
import { fetchContentfulStuff } from "../../api/temp";
import { useQuery } from "@tanstack/react-query";

function Posts() {
  const resp = useQuery(["posts"], fetchContentfulStuff, {
    staleTime: Infinity,
  });
  const { isLoading, isError, data } = resp;

  if (isLoading) {
    return <div>loading</div>;
  }

  if (isError) {
    return <div>Errlol</div>;
  }

  return (
    <div>
      <Link to="/">Home</Link>
      <hr />
      {data.items.map((item: any) => {
        return (
          <Link key={item.sys.id} to={item.sys.id}>
            {item.fields.title}
          </Link>
        );
      })}
    </div>
  );
}

export default Posts;
