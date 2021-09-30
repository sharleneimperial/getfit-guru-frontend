import React from "react";

function RoutineList(props) {

  return (
    <div className="card">
      <div className="face face1">
        <div className="content">
          <span className="stars"></span>
          <h2 className="java">Java</h2>
          <p className="java">Java.</p>
        </div>
      </div>
      <div className="face face2">
        <h2>{props.day}</h2>
      </div>
    </div>
  );
}

export default RoutineList;
