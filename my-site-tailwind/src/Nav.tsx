import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import "./Nav.css";

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
        <div>
            <nav className="navbar fixed top-0 left-0 right-0 bg-teal-500 p-6">
                <div className="flex items-center justify-between">

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
                </div>
            </nav>
        </div>
    )
}

export default Nav;

/** Notes for Tailwind CSS
 * 
 * Added the "fixed" and "top-0" classes to the navbar element to make it stick to the top of the page.
 * Added the "left-0" and "right-0" classes to make the navbar fill the entire width of the page.
 * 
 * Future options
 *  Utilized the dropdownItems prop to dynamically render the dropdown menu items using map().
 *      {dropdownItems.map((item, index) => (
                <li className="nav-link" key={index}>
                  <NavLink to={item.path}>{item.title}</NavLink>
                </li>
              ))}
 */