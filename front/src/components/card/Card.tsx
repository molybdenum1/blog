import { IPost } from "../../types";
import { Link } from "react-router-dom";
import { CardDiv } from "./Card.styled";

function Card({ post }: { post: IPost }) {
  return (
    <CardDiv key={post.id}>
      <Link to={`post/${post.id}`}>
        <div className="card-body">
          <h3>{post.title}</h3>
          <p className="card-text ">{post.content}</p>
        </div>
      </Link>
    </CardDiv>
  );
}

export default Card;
