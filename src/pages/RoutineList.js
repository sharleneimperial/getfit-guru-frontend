import React, { useState } from "react";
import ExerciseItem from "../components/ExerciseItem";
import { Link } from "react-router-dom";

function RoutineList(props) {
  console.log('routinelist props', props.exercises);
  const [exercises, setExercises] = useState(props.exercises);
  const listExercises = () => {
    return exercises.map((e, i) => {
      return (
        <ExerciseItem
          key={i}
          _id={e._id}
          type={e.type}
          muscleGroup={e.muscleGroup}
          name={e.name}
          durationGoal={e.durationGoal}
          weightGoal={e.weightGoal}
          repsGoal={e.repsGoal}
          setsGoal={e.setsGoal}
          distanceGoal={e.distanceGoal}
        />
      );
    });
  };

  let displayExerciseItem = exercises ? (listExercises()) : (<h2>Hold your horses... </h2>);


  return (
    <div className="card">
      <div className="face face1">
        <div className="content">
          <span className="stars"></span>
          {displayExerciseItem}
        </div>
      </div>
      <div className="face face2">
      <Link
        to={{
          pathname: "/details",
          state: exercises,
        }}
        key={props.day}
      >
        <h2>{props.day}</h2>
      </Link>
      </div>
    </div>
  );
}

export default RoutineList;
