import React from "react";
import "./about.css";
import earth from "../../assets/earth.jpg";

export default function about() {
  return (
    <div className="about">
      <h3 className="sectionhead">About US</h3>
      <div className="flex">
        <div className="innercontain">
          {/* <h2>Applying Smart Ideas @</h2> */}
          <h2>Co-creating Bussiness Transformation with Our Clients is in our DNA</h2>
          <div className="textcontainer">
            <p>
              <span>Ecoloop</span> is a tech focused to enhance the Quality of life
            </p>
            <p>
              2020 pandemeic has given a new perspective to startups and Digitialisation - Remotisation of Process, Products and Services
              are growing at fast pace.
            </p>
            <p>
              Our Expertise is in IoT based solutions and Our Experience in Industrial Automation enable us to utilise Data Analytics ,
              Artificial Intellegence- Machine Learning, Cloud Computing in industrial environment. Smart Cities and Smart Buildings are the
              buzz words and the promising fields are Agriculture, Education and Health Services.
            </p>
            <p>
              We are working Smart to convert <span>Ideas to Innovations</span>
            </p>
          </div>
        </div>
        <div className="img">
          <img src={earth} alt="earth" />
        </div>
      </div>
    </div>
  );
}
