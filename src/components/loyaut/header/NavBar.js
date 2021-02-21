import React from 'react'
import { NavLink} from 'react-router-dom'

const NavBar = () => {
    return (
        <nav className="header__nav">
            <ul>
                <NavLink 
                    activeClassName="activo"
                    exact
                    to="/"
                    className="header__nav-item"
                >
                    <i className="fas fa-home"></i>
                </NavLink>
                <NavLink 
                    activeClassName="activo"
                    exact
                    to="/marvel"
                    className="header__nav-item"
                >
                    <i className="fas fa-user-friends"></i>
                </NavLink>
                <NavLink 
                    activeClassName="activo"
                    exact
                    to="/marvel"
                    className="header__nav-item"
                >
                    <i className="fab fa-youtube"></i>
                </NavLink>
                <NavLink 
                    activeClassName="activo"
                    exact
                    to="/marvel"
                    className="header__nav-item"
                >
                    <i className="fas fa-users"></i>
                </NavLink>
                <NavLink 
                    activeClassName="activo"
                    exact
                    to="/marvel"
                    className="header__nav-item"
                >
                    <i className="fas fa-dice-d20"></i>
                </NavLink>
            </ul>
        </nav>
    )
}

export default NavBar