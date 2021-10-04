import React from "react";
import "./Welcome.css";
import { Link } from "react-router-dom";

const Welcome = () => {
  return (
    <div className="homepageContainer">
      <div className="headline">
        <h1>
          Reach your fitness goals FASTER with <br />
          <svg viewBox="0 0 600 75">
            {/* Symbol*/}
            <symbol id="s-text">
              <text textAnchor="middle" x="50%" y="50%" dy=".35em">
                Get-Fit Guru
              </text>
            </symbol>
            {/* Duplicate symbols*/}
            <use className="text" xlinkHref="#s-text" />
            <use className="text" xlinkHref="#s-text" />
            <use className="text" xlinkHref="#s-text" />
            <use className="text" xlinkHref="#s-text" />
            <use className="text" xlinkHref="#s-text" />
          </svg>
        </h1>
      </div>
      <div className="subHeadline">
        <h3>Set Goals - Log workouts - Track progress - Push yourself</h3>
      </div>
      <div className="callToAction">
        <Link
          to={{
            pathname: "/signup",
          }}
        >
          <h2>Click HERE to Get-Fit</h2>
        </Link>
      </div>
    </div>
  );
};

export default Welcome;
