import { IPost } from "../../types";
import Comment from "../comment/Comment";
import { PostDiv } from "./Post.styled";

function Post({ data }: { data: IPost[] }) {
  return (
    <PostDiv key={data[0].id}>
      {" "}
      <div>
        <h3>{data[0].title}</h3>
        <p>{data[0].content}</p>
      </div>
      <div>
        <h4>Comments</h4>
        {data[0].comments.map((comment) => (
          <Comment comment={comment} />
        ))}
      </div>
    </PostDiv>
  );
}

export default Post;
