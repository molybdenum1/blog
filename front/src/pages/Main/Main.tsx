import { useState } from "react";
import Card from "../../components/card/Card";
import Error from "../../components/error/Error";
import AddNewPostForm from "../../components/forms/AddNewPostForm";
import Loader from "../../components/loader/Loader";
import { useGetPostsQuery } from "../../store/posts/posts.api";
import { IPost } from "../../types";
import { Button } from "../../ui";

function MainPage() {
  const [showModal, setShowModal] = useState(false);
  const { data, isError, isLoading, isSuccess } = useGetPostsQuery("");
  console.log(data);

  let postContent;

  if (isLoading) {
    postContent = <Loader />;
  } else if (isSuccess) {
    postContent = data.map((post: IPost) => <Card post={post} />);
  } else if (isError) {
    postContent = <Error />;
  }

  return (
    <div className="row">
      <div className="col-md-4 offset-md-*">
        {showModal ? (
          <AddNewPostForm showModal={setShowModal} />
        ) : (
          <Button onClick={() => setShowModal(true)}>Add Post</Button>
        )}
      </div>
      <div className="col-lg-8">
        <div className="row">{postContent}</div>
      </div>
    </div>
  );
}

export default MainPage;
