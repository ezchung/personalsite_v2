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

