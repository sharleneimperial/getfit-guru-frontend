// Imports
import React, { useState, useEffect } from "react";
import Axios from "axios";
import { Redirect } from "react-router-dom";
import setAuthToken from "../utils/setAuthToken";
import RoutineList from "./RoutineList";

const { REACT_APP_SERVER_URL } = process.env;

const Routine = (props) => {
  const [routines, setRoutines] = useState();
  console.log("routine props", props);
  let token = localStorage.getItem("jwtToken");

  setAuthToken(token);

  useEffect(() => {
    const fetchRoutines = async () => {
      const response = await Axios.get(`${REACT_APP_SERVER_URL}/routines`);
      console.log("fetch routines", response.data);
      // const { results } = response.data.routines;
      setRoutines(response.data.routines);
    };
    fetchRoutines();
  }, []);
  console.log("routines", routines);

  const allRoutines = () => {
    return routines.map((r, i) => {
      return <RoutineList key={i} day={r.day} exercises={r.exercises} id={r._id} />;
    });
  };

  let displayRoutinesList = routines ? (allRoutines()) : (<h2>Hold your horses... </h2>);

  return (
    <div>
      <p>Welcome to your Getfit-Guru routines.</p>
      <div className="divBody">
      <div className="container">
            {displayRoutinesList}
      </div>
      </div>
    </div>
  );
};

export default Routine;
