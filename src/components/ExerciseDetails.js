import React from "react";

const ExerciseDetails = (props) => {
  console.log("details props", props);

  return (
    <div className="card">
      <div className="face face1">
        <div className="content">
          <span className="stars"></span>
          <h2 className="java">{props.name}</h2>
          <p className="java">Duration: {props.durationGoal}</p>
          <p className="java">Weight: {props.weightGoal}</p>
          <p className="java">Reps: {props.repsGoal}</p>
          <p className="java">Sets: {props.setsGoal}</p>
          <p className="java">Distance: {props.distanceGoal}</p>
        </div>
      </div>
      <div className="face face2">
        <h2>{props.muscleGroup}</h2>
      </div>
    </div>
  );
};

export default ExerciseDetails;
