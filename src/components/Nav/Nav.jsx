import { Link } from "react-router-dom";

function Nav() {
    return (<nav>
        <Link to="/">Home</Link>
        <Link to="/project">Project</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        </nav>
    );
}

export default Nav;
