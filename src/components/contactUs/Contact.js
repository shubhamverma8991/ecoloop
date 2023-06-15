import React from "react";
import "./Contact.css";
export default function Contact() {
  return (
    <div className="contact">
      <div className="innerContainer wd-40">
        <div>Email</div>
        <div>Whatsapp</div>
        <div>facebook</div>
        <div>Linkedln</div>
      </div>
      <div className="innerContainer wd-60">
        <div>
          <label htmlFor="name">Name</label>
          <br />
          <input type="text" name="name" id="name" />
        </div>
        <div className="phone">
          <label htmlFor="contact">Mobile No</label>
          <br />
          <input type="number" name="contact" id="contact" />
        </div>
        <div className="email">
          <label htmlFor="email">Email Id</label>
          <br />
          <input type="email" name="email" id="email" />
        </div>
        <div className="company">
          <label htmlFor="company">Company Name</label>
          <br />
          <input type="text" name="company" id="company" />
        </div>
        <div className="enquiry">
          <label htmlFor="msg">Enquiry</label>
          <br />
          <textarea placeholder="Please write your Enquiry" name="msg" id="msg" rows="10"></textarea>
        </div>
      </div>
    </div>
  );
}
