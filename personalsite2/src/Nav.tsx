import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import "./Nav.css";
import userContext from "./userContext";

/** Component for navigation dropdown bar
 *
 * Props: DropdownItem
 *          { 
 *              title : "Home",
 *              path : ...
 *          }
 *
 * State: None
 *
 * Context: None
 *
 * @returns Nav Component
 *
 * PersonalSiteApp -> Nav
 */

/**
 * {
 *  title : ...,
 *  path : ... 
 * }
 */
interface DropdownItem {
    title: string;
    path: string;
}

/**An array of dropdown items 
 * [
 *  {title : ...,
 *   path : ...},
 *  {...}
 * ]
*/
interface NavbarProps {
    dropdownItems: DropdownItem[];
}

function Nav({dropdownItems}:NavbarProps){
    const [isOpen, setIsOpen] = useState(false);

    function toggleDropdown(){
        setIsOpen(!isOpen);
    }
    return (
        <nav className="navbar">
            <NavLink
                className={
                "d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none"
                }
                to={"/"}
            >
                {/* create image for logo/home page route */}
                Hello
            </NavLink>
            <div className="navbar-dropdown">
                <button className="dropdown-toggle" onClick={toggleDropdown}>
                    {/* Insert image */}
                    Dropdown
                </button>
                {isOpen && (
                    <ul className="dropdown-menu">
                        <li className="nav-link">
                            <NavLink to={"/about"}>
                                About
                            </NavLink>
                        </li>
                        <li className="nav-link">
                            <NavLink to={"/projects"}>
                                Projects
                            </NavLink>
                        </li>
                    </ul>
                )}
            </div>
        </nav>
    )
}

export default Nav;