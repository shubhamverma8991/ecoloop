import React, { useState } from "react";
import "./navbar.css";
import logo from "../../assets/logo.jpg";
import { IoMdArrowDropdown } from "react-icons/io";

export default function Navbar() {
  return (
    <div className="section">
      <div className="top">
        <div className="col"></div>
        <div className="col">
          <img className="logo" src={logo} alt="" />
        </div>
        <div className="col right">
          <h4 className="navhead">CONTACT US</h4>
        </div>
      </div>
      <div className="bottom">
        <div className="navlinks">
          <div className="nav_col" id="nav_col">
            INDUSTRIES &nbsp;
            <IoMdArrowDropdown />
            <div className="drop">
              <div id="inner_nav">Option 1</div>
              <div id="inner_nav">Option 2</div>
              <div id="inner_nav">Option 3</div>
            </div>
          </div>
          <div className="nav_col">
            BUILDINGS&nbsp;
            <IoMdArrowDropdown />
            <div className="drop">
              <div id="inner_nav">Option 1</div>
              <div id="inner_nav">Option 2</div>
              <div id="inner_nav">Option 3</div>
            </div>
          </div>
          <div className="nav_col">
            AGRICULTURE&nbsp;
            <IoMdArrowDropdown />
            <div className="drop">
              <div id="inner_nav">Option 1</div>
              <div id="inner_nav">Option 2</div>
              <div id="inner_nav">Option 3</div>
            </div>
          </div>
          <div className="nav_col">
            EDUCATION&nbsp;
            <IoMdArrowDropdown />
            <div className="drop">
              <div id="inner_nav">Option 1</div>
              <div id="inner_nav">Option 2</div>
              <div id="inner_nav">Option 3</div>
            </div>
          </div>
          <div className="nav_col">
            HEALTH SERVICE&nbsp;
            <IoMdArrowDropdown />
            <div className="drop">
              <div id="inner_nav">Option 1</div>
              <div id="inner_nav">Option 2</div>
              <div id="inner_nav">Option 3</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
