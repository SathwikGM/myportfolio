import "./NavBar.scss";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <ul className="Navbar">
  <li>
    <NavLink to="/">Home</NavLink>
  </li>
  <li>
    <NavLink to="#About">About</NavLink>
  </li>
  <li>
    <NavLink to="#Skills">Skills</NavLink>
  </li>
  <li>
    <NavLink to="#Projects">Projects</NavLink>
  </li>
</ul>

  )
}

export default Navbar;