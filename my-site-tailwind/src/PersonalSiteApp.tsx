import React, { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import "./PersonalSiteApp.css";
import Nav from "./Nav";

/** Component for managing personalsite application
 * 
 * Prop: 
 * 
 * State: 
 * 
 * @returns PersonalSiteApp Component
 * 
 * App => PersonalSiteApp => {Nav, }
 */

function PersonalSiteApp(): JSX.Element {
  
    return (
      <div className="PersonalSiteApp">
        <div className="container">
          <BrowserRouter>
            <Nav></Nav>
          </BrowserRouter>
        </div>
      </div>
    );
  }
  
  export default PersonalSiteApp;