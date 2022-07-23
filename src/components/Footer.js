import React from "react";
import { FooterStyles } from "./styles/FooterStyles";

const Footer = () => {
  return (
    <FooterStyles>
      <div>
        <div>
          <h5>Support</h5>
          <ul>
            <li>Help Center</li>
            <li>AirCover</li>
            <li>Safety information</li>
            <li>Supporting people with disabilities</li>
            <li>Cancellation options</li>
            <li>Our COVID-19 Response</li>
            <li>Report a neighbourhood concern</li>
          </ul>
        </div>
        <div>
          <h5>Community</h5>
          <ul>
            <li>Airbnb.org: disaster relief housing</li>
            <li>Support Afghan refugees</li>
            <li>Combating discrimination</li>
          </ul>
        </div>
        <div>
          <h5>Hosting</h5>
          <ul>
            <li>Try hosting</li>
            <li>AirCover</li>
            <li>AirCover for Hosts</li>
            <li>Explore hosting resources</li>
            <li>Visit our community forum</li>
            <li>How to host responsibly</li>
          </ul>
        </div>
        <div>
          <h5>Airbnb</h5>
          <ul>
            <li>Newsroom</li>
            <li>Learn about new features</li>
            <li>Letter from our founders</li>
            <li>Supporting people with disabilities</li>
            <li>Careers</li>
            <li>Investors</li>
          </ul>
        </div>
      </div>
      <hr />
      <div>
        <p style={{ color: "gray", width: "500px", fontSize: "14px" }}>
          © 2022 Airbnb, Inc. · Privacy · Terms · Sitemap · Company details
        </p>
      </div>
    </FooterStyles>
  );
};

export default Footer;
