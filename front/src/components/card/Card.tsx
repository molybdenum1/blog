import { IPost } from "../../types";
import { Link } from "react-router-dom";

function Card({ post }: { post: IPost }) {
  return (
    <div className="d-flex justify-content-center" key={post.id}>
      <div className="card">
        <div className="card-body">
          <p className="card-text ">{post.content}</p>
          <h5 className="cart-title text-align-right">
            <Link to={`post/${post.id}`}>{post.title}</Link>
          </h5>
        </div>
      </div>
    </div>
  );
}

export default Card;
