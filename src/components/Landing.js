import React from "react";
import { LandingStyles } from "./styles/LandingStyles";
import LandingImage from "../images/landing.jpg";
import icon from "../images/icon.svg";

const Landing = () => {
  return (
    <LandingStyles>
      <nav>
        <a href="#">
          <img src={icon} alt="Airbnb" />
        </a>
      </nav>
      <img src={LandingImage}></img>
      <a href="#"></a>
      <header>
        <h4>BECOME A HOST</h4>
        <h1>
          Host your space,<br></br> share your world
        </h1>
        <p>
          The art of hosting is rooted in thoughtful design. Share your unique
          aesthetic with guests and earn extra income on a schedule that works
          for you.
        </p>
        <button>Try Hosting</button>
      </header>
    </LandingStyles>
  );
};

export default Landing;
