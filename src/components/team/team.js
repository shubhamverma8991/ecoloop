import React, { useEffect } from "react";
import "./team.css";
import teamData from "../../data/team.json";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

export default function Team() {
  const mystyle = {
    color: "white",
  };
  return (
    <div id="team" className="team">
      <div className="innercontainer">
        <h3 className="sectionhead">Our Team</h3>
        <h2>Together we Define</h2>
        <div className="inner">
          {teamData.map((person, index) => (
            <div className="teamspace" id="myElement" key={index}>
              <div className="name" id={index}>
                {person.name}
              </div>
              <div className="position" id={index}>
                {person.position}
              </div>
              <div className="info" id="{index}">
                {person.msg}
              </div>
              <div className="socials">
                <a style={mystyle} href="https://www.linkedin.com/" target="_blank">
                  <FaLinkedinIn />
                </a>
                <a style={mystyle} href="https://www.facebook.com/login/" target="_blank">
                  <FaFacebook />
                </a>
                <a style={mystyle} href="https://twitter.com/" target="_blank">
                  <FaTwitter />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
