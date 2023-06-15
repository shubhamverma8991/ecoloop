import React, { useState } from "react";
import "./navbar.css";
import logo from "../../assets/logo.jpg";
import { IoMdArrowDropdown } from "react-icons/io";

export default function Navbar() {
  const anchorstyle = {
    color: "black",
    textDecoration: "none",
  };
  return (
    <div className="section">
      <div className="top">
        <div className="col"></div>
        <div className="col">
          <img className="logo" src={logo} alt="" />
        </div>
        <div className="col right">
          <h4 className="navhead">CONTACT US</h4>
          <br />
          <h4 className="navhead">
            <a href="#team" style={anchorstyle}>
              OUR TEAM
            </a>
          </h4>
        </div>
      </div>
      <div className="bottom">
        <div className="navlinks">
          <div className="nav_col" id="nav_col">
            INDUSTRY &nbsp;
            <IoMdArrowDropdown />
            <div className="drop">
              <div id="inner_nav">Safety</div>
              <div id="inner_nav">Remote Monitoring</div>
              <div id="inner_nav">Health Monitoring and Tracking</div>
              <div id="inner_nav">Sensors</div>
              <div id="inner_nav">Monitors and Controllers</div>
              <div id="inner_nav">Image Processing</div>
              <div id="inner_nav">Platform and Solution</div>
            </div>
          </div>
          <div className="nav_col">
            BUILDING AUTOMATION&nbsp;
            <IoMdArrowDropdown />
            <div className="drop">
              <div id="inner_nav">Home</div>
              <div id="inner_nav">Office and Commercial Places</div>
            </div>
          </div>
          <div className="nav_col">
            MEDICAL HEALTH SERVICES&nbsp;
            <IoMdArrowDropdown />
            <div className="drop">
              <div id="inner_nav">Patient Monitoring</div>
              <div id="inner_nav">Special Gadgets</div>
            </div>
          </div>
          <div className="nav_col">
            SERVICE&nbsp;
            <IoMdArrowDropdown />
            <div className="drop">
              <div id="inner_nav">Option 1</div>
              <div id="inner_nav">Option 2</div>
              <div id="inner_nav">Option 3</div>
            </div>
          </div>
          <div className="nav_col">CAREER</div>
          <div className="nav_col">Site Resources</div>
        </div>
      </div>
    </div>
  );
}
