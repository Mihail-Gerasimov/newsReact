import React, { Component } from "react";
import "./Heading.css";
import "./HeadingMedia.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  NavLink,
} from "react-router-dom";
import logo from "./img/spaceLogo.png";

class Heading extends Component {
  render() {
    return (
      <>
        <div className="contentHeader">
          <div className="contentContainer">
            <NavLink to="/news" className="logo">
              <img src={logo} alt="" className="logoImg" />
              <p className="logoText">News / our space</p>
            </NavLink>

            <div className="newsFind">
              <NavLink to="/news" className="headerLinks">
                News
              </NavLink>
              <NavLink to="/bookmarks" className="headerLinks">
                Pinned news
              </NavLink>
              <NavLink to="/about" className="headerLinks">
                Author
              </NavLink>
            </div>
          </div>

        </div>
      </>
    );
  }
}

export default Heading;
