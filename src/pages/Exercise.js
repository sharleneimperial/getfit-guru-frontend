// Imports
import React, { useState, useEffect } from "react";
import Axios from "axios";
import { Redirect } from "react-router-dom";
import setAuthToken from "../utils/setAuthToken";
import ExerciseList from "./ExerciseList";

const { REACT_APP_SERVER_URL } = process.env;

const Exercise = () => {
  const [exercises, setExercises] = useState();
  console.log("local storage", localStorage);
  let token = localStorage.getItem("jwtToken");
  console.log(token);

  setAuthToken(token);

  useEffect(() => {
    const fetchExercises = async () => {
      const response = await Axios.get(`${REACT_APP_SERVER_URL}/exercises`);
      console.log("fetch exercises", response.data.exercises);
      // const { results } = response.data.routines;
      setExercises(response.data.exercises);
    };
    fetchExercises();
  }, []);
  console.log("exercises", exercises);

  const allExercises = () => {
    return exercises.map((e, i) => {
      return (
        <ExerciseList
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

  let displayExercisesList = exercises ? (
    allExercises()
  ) : (
    <h2>Hold your horses... </h2>
  );

  return (
    <div>
      <p>Welcome to your Getfit-Guru exercises.</p>
      <div className="divBody">
        <div className="container">{displayExercisesList}</div>
      </div>
    </div>
  );
};

export default Exercise;
