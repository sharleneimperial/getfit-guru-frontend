import React from "react";

function ExerciseList(props) {
  console.log('props of exercises', props);
  return (
        <div className="card">
          <div className="face face1">
            <div className="content">
              <span className="stars"></span>
              <input type="button" value="Add to Routine" />
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

{/* <select name="routine" id="routine" >
<option value="Monday">Monday</option>
<option value="Tuesday">Tuesday</option>
<option value="Wednesday">Wednesday</option>
<option value="Thursday">Thursday</option>
<option value="Friday">Friday</option>
<option value="Saturday">Saturday</option>
<option value="Sunday">Sunday</option>
</select> */}
