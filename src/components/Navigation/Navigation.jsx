import './Navigation.css';
import { NavLink } from "react-router-dom";

function Navigation() {
    return (
        <nav>
            <ul>
                <li>
                    <NavLink to="/" activeClassName="active-link">
                        <img src='../pixel-penelope.png' alt="About Icon" className="about-icon"></img>
                        About
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/projects" activeClassName="active-link">
                        <img src='../hotpink-folder.webp' alt="Project Icon" className="project-icon"></img>
                        Projects
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/contact" activeClassName="active-link">
                        <img src='../black-star.png' alt="Connect Icon" className="connect-icon"></img>
                        Connect
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default Navigation;
