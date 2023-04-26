import { IComment } from "../../types";
import { CommentDiv } from "./Comment.styled";

function Comment({comment}: {comment: IComment}) {
  return (
    <CommentDiv key={comment.id}>
        <p>{comment.content}</p>
    </CommentDiv>
  );
}

export default Comment;
