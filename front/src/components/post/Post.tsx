import { useNavigate } from "react-router-dom";
import { useDeletePostMutation } from "../../store/posts/posts.api";
import { IPost } from "../../types";
import Comment from "../comment/Comment";
import { Button } from "../../ui";
import { PostDiv } from "./Post.styled";
import { useState } from "react";
import EditPostForm from "../forms/EditPostForm";
import AddCommentForm from "../forms/AddCommentForm";

function Post({ data }: { data: IPost }) {
  const [showModal, setShowModal] = useState(false);

  const [deletePost] = useDeletePostMutation();
  const navigate = useNavigate();

  return (
    <PostDiv key={data.id}>
      {showModal ? (
        <EditPostForm data={data} setShowModal={setShowModal} />
      ) : (
        <div>
          <h3>{data.title}</h3>
          <p>{data.content}</p>
          <div>
            <Button
              onClick={() => {
                navigate("/");
                deletePost(data.id);
                window.location.reload();
              }}
            >
              Delete
            </Button>
            <Button onClick={() => setShowModal(true)}>Edit</Button>
          </div>
        </div>
      )}

      <div>
        <h4>Add comment</h4>
        <div>
          <AddCommentForm data={data} />
        </div>
        <h4>Comments</h4>
        {data.comments.map((comment) => (
          <Comment comment={comment} />
        ))}
      </div>
    </PostDiv>
  );
}

export default Post;
