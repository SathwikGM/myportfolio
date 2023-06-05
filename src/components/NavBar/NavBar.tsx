import "./NavBar.scss";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <ul className="Navbar">
      <NavLink to="/"><li>Home</li></NavLink>
      <NavLink to="#About"><li>About</li></NavLink>
      <NavLink to="#Skills"><li>Skills</li></NavLink>
      <NavLink to="#Projects"><li>Projects</li></NavLink>
      </ul>
  )
}

export default Navbar;