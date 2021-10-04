import React from "react";
import axios from "axios";
const { REACT_APP_SERVER_URL } = process.env;

const ExerciseItem = (props) => {
  // let routineId = props.routineId;
  // console.log("exerciseitem props", routineId);

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log("we hit the handlesubmit for the delete", props);

  //   axios
  //     .delete(`${REACT_APP_SERVER_URL}/routines/${props._id}`, routineId)
  //     .then((response) => {
  //       console.log("exercise response", response);
  //     })
  //     .catch((error) => console.log("===> Error in Signup", error));
  // };

  return (
    <div>
      <p className="java">{props.name}</p>
      {/* <button onClick={handleSubmit}>X</button> */}
      {/* <p className="java">{props.muscleGroup}</p> */}
    </div>
  );
};

export default ExerciseItem;
