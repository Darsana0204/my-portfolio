import { NavLink } from "react-router-dom";
import "./Sidebar.css";

function Sidebar() {
    return(
        <div className="sidebar">
            <div className="profile">
                <h2>Darsana R</h2>
                <p>B-Tech in Information Technology</p><br></br>
            </div>
            <nav>
                <br></br>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/projects">Projects</NavLink>
                <NavLink to="/contact">Contact</NavLink>
            </nav>
        </div>
    );
}
export default Sidebar;