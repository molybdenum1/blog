import { Link } from "react-router-dom";
import { NavBarDiv } from "./NavBar.styled";

function NavBar() {
  return (
    <NavBarDiv>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    </NavBarDiv>
  );
}

export default NavBar;
