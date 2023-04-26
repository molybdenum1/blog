import Loader from "../../components/loader/Loader";
import Error from "../../components/error/Error";
import { useGetPostQuery } from "../../store/posts/posts.api";
import { useParams } from "react-router-dom";
import Post from "../../components/post/Post";

function PostPage() {
  const { id } = useParams();

  const { data, isError, isLoading, isSuccess } = useGetPostQuery(id ?? '');

  let postContent;

  if (isLoading) {
    postContent = <Loader />;
  } else if (isSuccess) {
    postContent = (
        <Post data={data}/>
    );
  } else if (isError) {
    postContent = <Error />;
  }

  return <div>
    {postContent}
  </div>;
}

export default PostPage;
