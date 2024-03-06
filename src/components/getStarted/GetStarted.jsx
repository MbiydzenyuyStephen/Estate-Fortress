import React from "react";
import "./getStarted.css";
const GetStarted = () => {
  return (
    <div id="get-started" className="g-wrapper">
      <div className="paddings innerWidth g-container">
        <div className="flexColCenter inner-container">
          <span className="primaryText">Get started with Estate Fortress</span>
          <span className="secondaryText">
          Subscribe to our services and find affordable properties of your choice
          <br />
          Find your dream home in minutes
          </span>
          <button className="button" href>
            <a href="mailto:zainkeepscode@gmail.com">Get Started</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
