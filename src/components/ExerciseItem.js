import React from 'react';

const ExerciseItem = (props) => {
    console.log('exerciseitem props', props)



    return (
        <div>
          <p className="java">{props.name}</p>
          {/* <p className="java">{props.muscleGroup}</p> */}
        </div>
    )
}

export default ExerciseItem;