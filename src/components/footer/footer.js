import React from "react";
import "./footer.css";

export default function footer() {
  const universal = {
    margin: 0,
    padding: 0,
  };
  const color = {
    textDecoration: "none",
  };
  return (
    <div className="footerline">
      <div className="footerCopyRight">
        <p style={universal}>&copy;Ecoloop,Inc.</p>
      </div>

      <div className="footerMedia">
        <div>
          <p style={universal}>Facebook</p>
        </div>
        <div>
          <p style={universal}>Linkedin</p>
        </div>
        <div>
          <p style={universal}>Twitter</p>
        </div>
        <div>
          <p style={universal}>Instagram</p>
        </div>
        <div>
          <p style={universal}>
            <a style={color} href="#about">
              About
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
