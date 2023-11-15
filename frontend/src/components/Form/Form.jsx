import React from "react";
import "./form.css";

function Form() {
  return (
    <div className="form">
      <h1>Contact Us</h1>
      <p className="text_form">
        If you have a suggestion or an idea, leave us a message.
      </p>
      <div className="input">
        <div className="coordinates">
          <input className="name" type="text" placeholder="Name" />
          <input className="email" type="email" placeholder="Email" />
        </div>
        <input className="phone" type="text" placeholder="Phone" />
        <textarea className="message" type="text" placeholder="Message" />
        <div className="btn_form">
          <button type="button">Send Message</button>
        </div>
      </div>
    </div>
  );
}

export default Form;
