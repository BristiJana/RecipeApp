import React from "react";
import { Link, withRouter } from "react-router-dom";
import "./App.css";
function Navigation(props) {
  return (
    <div className="navigation">
      <nav class="navbar navbar-expand navbar-dark bg-dark">
        <div class="container">
          <Link class="navbar-brand" to="/">
            <em>Food Delights</em>
          </Link>
          <div>
            <ul class="navbar-nav ml-auto">
              <li
                class={`nav-item  ${ 
                  props.location.pathname === "/" ? "active" : ""}`} >
                <Link class="nav-link" to="/">
                  Home
                  
                </Link>
              </li>
              <li
                class={`nav-item  ${
                  props.location.pathname === "/App" ? "active" : ""}`} >
                <Link class="nav-link" to="/App">
                  Explore
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default withRouter(Navigation);
