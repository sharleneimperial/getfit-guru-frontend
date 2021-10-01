import React, { useState } from "react";
import axios from "axios";

import ProgressForm from "./ProgressForm";
import RepsTracker from "./trackers/RepsTracker";
import SetsTracker from "./trackers/SetsTracker";
import WeightTracker from "./trackers/WeightTracker";
import DistanceTracker from "./trackers/DistanceTracker";
import DurationTracker from "./trackers/DurationTracker";

const { REACT_APP_SERVER_URL } = process.env;

const ExerciseDetails = (props) => {
  const [duration, setDuration] = useState(0);
  const [distance, setDistance] = useState(0);
  const [weight, setWeight] = useState(0);
  const [reps, setReps] = useState(0);
  const [sets, setSets] = useState(0);

  const increaseSets = () => {
    const newSetsNumber = sets >= 30 ? 10 : sets + 1;
    setSets(newSetsNumber);
  };
  const clearSets = () => {
    setSets(0);
  };

  const increaseReps = () => {
    const newRepsNumber = reps >= 30 ? 10 : reps + 1;
    setReps(newRepsNumber);
  };
  const clearReps = () => {
    setReps(0);
  };

  const increaseWeight = () => {
    const newWeightNumber = weight >= 800 ? 10 : weight + 5;
    setWeight(newWeightNumber);
  };
  const clearWeight = () => {
    setWeight(0);
  };

  const increaseDistance = () => {
    const newDistanceNumber = distance >= 10 ? 10 : distance + 1;
    setDistance(newDistanceNumber);
  };
  const clearDistance = () => {
    setDistance(0);
  };

  const increaseDuration = () => {
    const newDurationNumber = duration >= 1000 ? 10 : duration + 1;
    setDuration(newDurationNumber);
  };
  const clearDuration = () => {
    setDuration(0);
  };

  const handleSubmit = (e) => {
    e.preventDefault(); 
    console.log("we hit the handlesubmit for the form");

      const newProgress = { duration, weight, reps, sets, distance, exerciseId: props._id };
      axios
        .post(`${REACT_APP_SERVER_URL}/progress`, newProgress)
        .then((response) => {
          console.log("===> Yay, new exercise");
          console.log('exercise response', response);
          // setRedirect(true);
        })
        .catch((error) => console.log("===> Error in Signup", error));
    
  };

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
        <button onClick={handleSubmit} >Save Progress</button>
        </div>
        <RepsTracker
          reps={reps}
          increaseReps={increaseReps}
          clearReps={clearReps}
        />
        <SetsTracker
          sets={sets}
          increaseSets={increaseSets}
          clearSets={clearSets}
        />
        <WeightTracker
          weight={weight}
          increaseWeight={increaseWeight}
          clearWeight={clearWeight}
        />
        <DistanceTracker
          distance={distance}
          increaseDistance={increaseDistance}
          clearDistance={clearDistance}
        />
        <DurationTracker
          duration={duration}
          increaseDuration={increaseDuration}
          clearDuration={clearDuration}
        />
      </div>
      <div className="face face2">
        <h2>{props.muscleGroup}</h2>
      </div>
    </div>
  );
};

export default ExerciseDetails;
