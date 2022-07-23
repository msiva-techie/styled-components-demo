import React from "react";
import { FooterFormStyles } from "./styles/FooterFormStyles";

const FooterForm = () => {
  return (
    <FooterFormStyles>
      <div>
        <h1>Find out more and connect with expert Hosts</h1>
        <p>
          We’ll share more about hosting and give you access to live webinars
          where experienced hosts can answer your questions.
        </p>
      </div>
      <div>
        <div className="form">
          <div>
            <input type="text" placeholder="Email address"></input>
          </div>
          <div>
            <input type="text" placeholder="Phone number (Optional)"></input>
          </div>
        </div>
        <div style={{ color: "grey" }}>
          <div className="checkbox">
            <input type="checkbox"></input>
            <small>
              I want to receive occasional insights and information from Airbnb
              about hosting and can unsubscribe at any time.
            </small>
          </div>
          <button>Sign up</button>
          <br></br>
          <div style={{ width: "60%", fontSize: "12px" }}>
            By selecting "Sign up", I agree that Airbnb will process my personal
            information in accordance with the
            <u style={{ cursor: "pointer" }}>
              <b> Airbnb Privacy Policy</b>
            </u>
          </div>
        </div>
      </div>
    </FooterFormStyles>
  );
};

export default FooterForm;
