import { Link, useNavigate } from "react-router-dom";
import "./Nav.css";

function Nav(props) {
  const { loggedIn, setLoggedIn } = props;

  const navigate = useNavigate();

  const handleClick = () => {
    window.localStorage.removeItem("token");
    setLoggedIn(false);
    navigate(`/`);
  };

  return (
    <nav>
      <div className="nav-logo">
        {" "}
        <img
          src="images/logo.jpg"
          className="logo-image"
        />
      </div>
      <div className="nav-links">
        <Link className="nav-btn" to="/">
          Home
        </Link>
        <Link className="nav-btn" to="/project">
          Projects
        </Link>
        {loggedIn && (
          <Link className="nav-btn" to="/create-project">
            Create Project
          </Link>
        )}

        {!loggedIn && (
          <Link className="nav-btn" to="/sign-up">
            Sign Up
          </Link>
        )}
        {!loggedIn && (
          <Link className="nav-btn" to="/login">
            Login
          </Link>
        )}
        {loggedIn && (
          <button className="logout-btn" onClick={handleClick}>
            Logout
          </button>
        )}
      </div>
    </nav>
  );
}

export default Nav;