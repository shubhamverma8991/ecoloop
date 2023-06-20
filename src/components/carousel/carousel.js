import React from "react";
import one from "../../assets/1.jpg";
import two from "../../assets/2.jpg";
import three from "../../assets/3.jpg";
import four from "../../assets/4.jpg";
import five from "../../assets/5.jpg";
import "./carousel.css";

export default function carousel() {
  return (
    <div>
      <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="5000">
            <img src={one} className="d-block w-100 customimg" alt="..." />
          </div>
          <div className="carousel-item" data-bs-interval="5000">
            <img src={two} className="d-block w-100 customimg" alt="..." />
          </div>
          <div className="carousel-item" data-bs-interval="5000">
            <img src={three} className="d-block w-100 customimg" alt="..." />
          </div>
          <div className="carousel-item" data-bs-interval="5000">
            <img src={four} className="d-block w-100 customimg" alt="..." />
          </div>{" "}
          <div className="carousel-item" data-bs-interval="5000">
            <img src={five} className="d-block w-100 customimg" alt="..." />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}
