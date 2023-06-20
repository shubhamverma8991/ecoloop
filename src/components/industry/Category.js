import React from "react";
import SidePannel from "../sidepannel/SidePannel";
import { useParams } from "react-router-dom";
import "./Category.css";

export default function Category() {
  const Type = window.location.href;
  var path = Type.split("/").pop();
  console.log(path);

  if (path == "building") {
    path = "Building Automation";
  } else if (path == "medical") {
    path = "Medical health services";
  }
  return (
    <div>
      {path.toUpperCase()}
      <SidePannel path={path} />
    </div>
  );
}
