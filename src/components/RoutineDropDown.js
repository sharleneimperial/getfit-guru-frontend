import React, { useState, useEffect } from "react";
import Axios from "axios";
import { Redirect } from "react-router-dom";
import setAuthToken from "../utils/setAuthToken";

const { REACT_APP_SERVER_URL } = process.env;

const RoutineDropDown = (props) => {
  const [routineGroup, setRoutineGroup] = useState("");
  const [redirect, setRedirect] = useState(false);
  const [allRoutines, setAllRoutines] = useState([]);
  let token = localStorage.getItem("jwtToken");

  setAuthToken(token);

  useEffect(() => {
    const fetchRoutines = async () => {
      const response = await Axios.get(`${REACT_APP_SERVER_URL}/routines`);
      console.log("fetch routines", response.data.routines);
      setAllRoutines(response.data.routines);
        setRoutineGroup(response.data.routines[0]._id);
    };
    fetchRoutines();
  }, []);

  const handleRoutineDay = (e) => {
    setRoutineGroup(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    Axios.put(`${REACT_APP_SERVER_URL}/routines/${routineGroup}`, {exercise: props.exerciseId})
      .then((response) => {
        console.log("===> Yay, new exercise add to routine");
        console.log("add exercise to routine response", response);
        setRedirect(true);
      })
      .catch((error) => console.log("===> Error in Signup", error));
  };

  if (redirect) return <Redirect to="/routines" />;

  const generateOptions = () => {
    return allRoutines.map((r, i) => {
      return (
        <option key={i} value={r._id}>
          {r.day}
        </option>
      );
    });
  };

  return (
    <div>
      <form onSubmit={e => handleSubmit(e)}>
        <label htmlFor="routineGroup">Add to Routine:</label>
        <select
          name="routineGroup"
          id="routineGroup"
          onChange={e => handleRoutineDay(e)}
          value={routineGroup}
        >
          {allRoutines.length && generateOptions()}
        </select>
        <input type="submit" value="Add to Routine" />
      </form>
    </div>
  );
};

export default RoutineDropDown;
