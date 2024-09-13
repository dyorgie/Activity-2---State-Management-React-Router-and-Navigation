import "./Navbar.css";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <Link className="siteTitle" to="/">
        Cavern Club
      </Link>
      <ul>
        <CustomLink to="/About">About</CustomLink>
        <CustomLink to="/Counter">Counter</CustomLink>
        <CustomLink to="/Contact">Contact</CustomLink>
      </ul>
    </nav>
  );
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}

export default Navbar;
