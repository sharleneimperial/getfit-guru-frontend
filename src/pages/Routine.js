// Imports
import React, { useState, useEffect } from "react";
import Axios from "axios";
import { Redirect } from "react-router-dom";
import setAuthToken from "../utils/setAuthToken";
import RoutineList from "./RoutineList";

const { REACT_APP_SERVER_URL } = process.env;

const Routine = () => {
  const [routines, setRoutines] = useState();
  console.log("local storage", localStorage);
  let token = localStorage.getItem("jwtToken");

  setAuthToken(token);

  useEffect(() => {
    const fetchRoutines = async () => {
      const response = await Axios.get(`${REACT_APP_SERVER_URL}/routines`);
      console.log("fetch routines", response.data.routines);
      // const { results } = response.data.routines;
      setRoutines(response.data.routines);
    };
    fetchRoutines();
  }, []);
  console.log("routines", routines);

  const allRoutines = () => {
      return routines.map((r, i) => {
        return <RoutineList key={i} day={r.day} />;
      })
  }

  let displayRoutinesList = routines ? allRoutines() : <h2>Hold your horses...  </h2>;

  return (
    <div>
      <p>Welcome to your Getfit-Guru routines.</p>
      {displayRoutinesList}
    </div>
  );
};

export default Routine;
