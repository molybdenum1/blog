import Card from "../../components/card/Card";
import Error from "../../components/error/Error";
import Loader from "../../components/loader/Loader";
import { useGetPostsQuery } from "../../store/posts/posts.api";
import { IPost } from "../../types";

function MainPage() {
  const { data, isError, isLoading, isSuccess } = useGetPostsQuery("");
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
      <div className="col-md-4 offset-md-*">CHETO</div>
      <div className="col-lg-8">
        <div className="row">{postContent}</div>
      </div>
    </div>
  );
}

export default MainPage;
