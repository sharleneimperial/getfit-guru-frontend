import React, { useState } from 'react';
import ExerciseDetails from "../components/ExerciseDetails";

const Details = (props) => {
    const [exercises, setExercises] = useState(props.location.state);
    console.log('details props', props)

    const listExercises = () => {
        return exercises.map((e, i) => {
          return (
            <ExerciseDetails
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
        <div>
        <p>Welcome to your Getfit-Guru exercises.</p>
        <div className="divBody">
          <div className="container">{displayExerciseItem}</div>
        </div>
      </div>
    )
}

export default Details;