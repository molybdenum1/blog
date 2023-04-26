import { LoaderDiv } from "./Loader.styled";

function Loader() {
  return (
    <LoaderDiv>
      <div className="spinner-boarder" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </LoaderDiv>
  );
}

export default Loader;
