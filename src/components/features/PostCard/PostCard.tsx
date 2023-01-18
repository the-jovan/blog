import { useNavigate } from "react-router-dom";

function PostCard({
  createdAt, //sys.createdAt
  id, //sys.id
  slug, //fields.slug
  title, //fields.title
  img, //string
}: any) {
  const navigate = useNavigate();

  return (
    <div onClick={() => navigate(slug, { state: id })}>
      <h1>{title}</h1>
      <div>lorem ipsum</div>
    </div>
  );
}

export default PostCard;
