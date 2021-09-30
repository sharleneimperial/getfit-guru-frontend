import React from "react";
import RoutineDropDown from "../components/RoutineDropDown";

function ExerciseList(props) {
  console.log('props of exercises', props);
  return (
        <div className="card">
          <div className="face face1">
            <div className="content">
              <span className="stars"></span>
              <RoutineDropDown exerciseId={props._id} />
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
}

export default ExerciseList;


