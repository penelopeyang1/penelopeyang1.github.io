import './Navigation.css';
import { NavLink } from "react-router-dom";

function Navigation() {
    return (
        <nav>
            <ul>
                <li>
                    <NavLink to="/" activeClassName="active-link">About</NavLink>
                </li>
                <li>
                    <NavLink to="/projects" activeClassName="active-link">Projects</NavLink>
                </li>
                <li>
                    <NavLink to="/contact" activeClassName="active-link">Contact</NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default Navigation;
