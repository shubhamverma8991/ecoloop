import React from "react";
import "./Contact.css";
export default function Contact() {
  return (
    <div className="ContactDiv">
      <h4 className="sectionhead">Contact US</h4>
      <div className="contact">
        <div className="innerContainer wd-40">
          <div>
            <h3>Email</h3>
            <h4>Hi@gmail.com</h4>
          </div>
          <div>
            <h3>WhatsApp</h3>
            <h4>+91 123,456,789,0</h4>
          </div>
          <div>
            <h3>FaceBook</h3>
            <h4>https.facebook.com</h4>
          </div>
          <div>
            <h3>Linkedln</h3>
            <h4>https:linkedln.com</h4>
          </div>
        </div>
        <div className="innerContainer wd-60">
          <div>
            {/* <label htmlFor="name">Name</label>
          <br /> */}
            <input type="text" name="name" id="name" placeholder="Enter Name Here" />
          </div>
          <div className="phone">
            {/* <label htmlFor="contact">Mobile No</label>
          <br /> */}
            <input type="number" name="contact" id="contact" placeholder="Enter Mobile Number" />
          </div>
          <div className="email">
            {/* <label htmlFor="email">Email Id</label>
          <br /> */}
            <input type="email" name="email" id="email" placeholder="Enter Email Id Here" />
          </div>
          <div className="company">
            {/* <label htmlFor="company">Company Name</label>
          <br /> */}
            <input type="text" name="company" id="company" placeholder="Enter Company Name" />
          </div>
          <div className="enquiry">
            {/* <label htmlFor="msg">Enquiry</label>
          <br />
          <br /> */}
            <textarea placeholder="Please write your Enquiry" name="msg" id="msg" rows="10"></textarea>
          </div>
          <div className="button">
            <button>Submit a Enquiry</button>
          </div>
        </div>
      </div>
    </div>
  );
}
