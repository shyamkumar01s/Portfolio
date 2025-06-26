import { NavLink } from "react-router-dom";
import './navbar.css';

const Navbar = () => {
  return (
    <nav className="custom-navbar">
      <ul className="nav-list">
        <li><NavLink to="/" end className="nav-button">Home</NavLink></li>
        <li><NavLink to="/skills" className="nav-button">Skills</NavLink></li>
        <li><NavLink to="/about" className="nav-button">About</NavLink></li>
        <li><NavLink to="/contact" className="nav-button">Contact</NavLink></li>
      </ul>
    </nav>
  );
};

export default Navbar;