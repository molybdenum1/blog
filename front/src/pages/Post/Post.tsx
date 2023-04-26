import Loader from "../../components/loader/Loader";
import Error from "../../components/error/Error";
import { useGetPostQuery } from "../../store/posts/posts.api";
import { useParams } from "react-router-dom";

function PostPage() {
  const { id } = useParams();

  const { data, isError, isLoading, isSuccess } = useGetPostQuery(id ?? '');

  console.log(data);
  let postContent;

  if (isLoading) {
    postContent = <Loader />;
  } else if (isSuccess) {
    postContent = (
        <div key={data[0].id}>
            <div>
                <h3>{data[0].title}</h3>
                <p>{data[0].content}</p>
            </div>
            <div>
                {data[0].comments.map(comment => (
                    <div key={comment.id}>
                        <p>{comment.content}</p>
                    </div>
                ))}
            </div>
        </div>
    );
  } else if (isError) {
    postContent = <Error />;
  }

  return <div>
    {postContent}
  </div>;
}

export default PostPage;
