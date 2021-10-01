// Imports
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";

const { REACT_APP_SERVER_URL } = process.env;

const ExerciseForm = () => {
  const [type, setType] = useState("Resistance");
  const [muscleGroup, setMuscleGroup] = useState("Chest");
  const [name, setName] = useState("");
  const [img_url, setImg_Url] = useState("");
  const [equipment, setEquipment] = useState("");
  const [steps, setSteps] = useState("");
  const [durationGoal, setDurationGoal] = useState("");
  const [weightGoal, setWeightGoal] = useState('');
  const [repsGoal, setRepsGoal] = useState('');
  const [setsGoal, setSetsGoal] = useState('');
  const [distanceGoal, setDistanceGoal] = useState('');
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    if (type === 'Cardio') {
      setMuscleGroup('Heart/Respiratory');
    }
  
  }, [type])

  const handleType = (e) => {
      setType(e.target.value);
  }
  
  const handleMuscleGroup = (e) => {
      setMuscleGroup(e.target.value);
  }

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleImage = (e) => {
    setImg_Url(e.target.value);
  };

  const handleEquipment = (e) => {
    setEquipment(e.target.value);
  };

  const handleSteps = (e) => {
    setSteps(e.target.value);
  };

  const handleDurationGoal = (e) => {
    setDurationGoal(e.target.value);
  };

  const handleWeightGoal = (e) => {
    setWeightGoal(e.target.value);
  };

  const handleRepsGoal = (e) => {
    setRepsGoal(e.target.value);
  };
  const handleSetsGoal = (e) => {
    setSetsGoal(e.target.value);
  };
  const handleDistanceGoal = (e) => {
    setDistanceGoal(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault(); 

      const newExercise = { type, muscleGroup, name, img_url, equipment, steps, durationGoal, weightGoal, repsGoal, setsGoal, distanceGoal };
      axios
        .post(`${REACT_APP_SERVER_URL}/exercises`, newExercise)
        .then((response) => {
          console.log("===> Yay, new exercise");
          console.log('exercise response', response);
          setRedirect(true);
        })
        .catch((error) => console.log("===> Error in Signup", error));
    
  };

if (redirect) return <Redirect to="/exercises" />; // You can have them redirected to profile (your choice)

  return (
    <div className="row mt-4">
      <div className="col-md-7 offset-md-3">
        <div className="card card-body">
          <h2 className="py-2">Add your exercise:</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="type">Exercise type: </label>
              <br/>
              <select name="type" id="types" onChange={handleType}>
                <option value="Resistance">Resistance</option>
                <option value="Cardio">Cardio</option>
              </select>
              <br/>
              <label htmlFor="muscleGroup">Target Muscle Group: </label>
              <br/>
              <select name="muscleGroup" id="muscleGroup" onChange={handleMuscleGroup} value={muscleGroup}>
                <option value="Chest">Chest</option>
                <option value="Back">Back</option>
                <option value="Arms">Arms</option>
                <option value="Shoulders">Shoulders</option>
                <option value="Legs">Legs</option>
                <option value="Calves">Calves</option>
                <option value="Core">Core</option>
                <option value="Heart/Respiratory">Heart/Respiratory</option>
              </select>
              <br/>
              <label htmlFor="name">Name</label> 
              <input
                type="text"
                name="name"
                value={name}
                onChange={handleName}
                className="form-control"
                id="name"
              />
              <label htmlFor="img_url">Image URL</label> 
              <input
                type="text"
                name="img_url"
                value={img_url}
                onChange={handleImage}
                className="form-control"
                id="img_url"
              />
              <label htmlFor="equipment">Equipment Needed</label> 
              <input
                type="text"
                name="equipment"
                value={equipment}
                onChange={handleEquipment}
                className="form-control"
                id="equipment"
              />
              <label htmlFor="steps">Steps</label> 
              <input
                type="text"
                name="steps"
                value={steps}
                onChange={handleSteps}
                className="form-control"
                id="steps"
              />
            </div> 
            {
              type === 'Resistance' ? 
              <>
              <div className="form-group">
              <label htmlFor="weightGoal">Weight Goal</label>
              <input
                type="text"
                name="weightGoal"
                value={weightGoal}
                onChange={handleWeightGoal}
                className="form-control"
                id="weightGoal"
              />
            </div>
            <div className="form-group">
              <label htmlFor="repsGoal">Reps Goal</label>
              <input
                type="text"
                name="repsGoal"
                value={repsGoal}
                onChange={handleRepsGoal}
                className="form-control"
                id='repsGoal'
              />
            </div>
            <div className="form-group">
              <label htmlFor="setsGoal">Sets Goal</label>
              <input
                type="text"
                name="setsGoal"
                value={setsGoal}
                onChange={handleSetsGoal}
                className="form-control"
                id='setsGoal'
              />
            </div>
              </> 
              : 
              <>
               <div className="form-group">
              <label htmlFor="durationGoal">Duration Goal</label>
              <input
                type="text"
                name="durationGoal"
                value={durationGoal}
                onChange={handleDurationGoal}
                className="form-control"
                id="durationGoal"
              />
            </div>
            <div className="form-group">
              <label htmlFor="distanceGoal">Distance Goal</label>
              <input
                type="text"
                name="distanceGoal"
                value={distanceGoal}
                onChange={handleDistanceGoal}
                className="form-control"
                id='distanceGoal'
              />
            </div>
              </>
            } 
            <button type="submit" className="btn btn-primary float-right">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ExerciseForm;
