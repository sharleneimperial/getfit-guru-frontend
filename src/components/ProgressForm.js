// Imports
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";

const { REACT_APP_SERVER_URL } = process.env;

const ProgressForm = () => {
  const [duration, setDuration] = useState("");
  const [weight, setWeight] = useState('');
  const [reps, setReps] = useState('');
  const [sets, setSets] = useState('');
  const [distance, setDistance] = useState('');
  const [redirect, setRedirect] = useState(false);

  

  const handleDuration = (e) => {
    setDuration(e.target.value);
  };

  const handleWeight = (e) => {
    setWeight(e.target.value);
  };

  const handleReps = (e) => {
    setReps(e.target.value);
  };
  const handleSets = (e) => {
    setSets(e.target.value);
  };
  const handleDistance = (e) => {
    setDistance(e.target.value);
  };

//   const handleSubmit = (e) => {
//     e.preventDefault(); // at the beginning of a submit function
//     // make sure password and confirm password are equal
//     // password length >= 8 characters

//       const newExercise = { type, muscleGroup, name, durationGoal, weightGoal, repsGoal, setsGoal, distanceGoal };
//       axios
//         .post(`${REACT_APP_SERVER_URL}/exercises`, newExercise)
//         .then((response) => {
//           console.log("===> Yay, new exercise");
//           console.log('exercise response', response);
//           setRedirect(true);
//         })
//         .catch((error) => console.log("===> Error in Signup", error));
    
//   };

// if (redirect) return <Redirect to="/exercises" />; // You can have them redirected to profile (your choice)

  return (
    <div className="row mt-4">
      <div className="col-md-7 offset-md-3">
        <div className="card card-body">
          <h2 className="py-2">Progress:</h2>
          <form>
            <div className="form-group">
              <div className="form-group">
              <label htmlFor="weight">Weight </label>
              <input
                type="text"
                name="weight"
                value={weight}
                onChange={handleWeight}
                className="form-control"
                id="weight"
              />
            </div>
            <div className="form-group">
              <label htmlFor="reps">Reps </label>
              <input
                type="text"
                name="reps"
                value={reps}
                onChange={handleReps}
                className="form-control"
                id='reps'
              />
            </div>
            <div className="form-group">
              <label htmlFor="sets">Sets </label>
              <input
                type="text"
                name="sets"
                value={sets}
                onChange={handleSets}
                className="form-control"
                id='sets'
              />
            </div>
               <div className="form-group">
              <label htmlFor="duration">Duration </label>
              <input
                type="text"
                name="duration"
                value={duration}
                onChange={handleDuration}
                className="form-control"
                id="duration"
              />
            </div>
            <div className="form-group">
              <label htmlFor="distance">Distance </label>
              <input
                type="text"
                name="distance"
                value={distance}
                onChange={handleDistance}
                className="form-control"
                id='distance'
              />
            </div>
            <button type="submit" className="btn btn-primary float-right">
              Submit
            </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProgressForm;


{/* <form onSubmit={handleSubmit}> */}