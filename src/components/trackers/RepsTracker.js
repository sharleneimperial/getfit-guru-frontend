import React, {useState} from 'react';

const RepsTracker = props => {

    return (
        <div className="list">
            <p>Reps: {props.reps}</p>
            <button onClick={props.increaseReps}>Add a Rep</button>
            <button onClick={props.clearReps}>Clear Reps</button>
        </div>
    );
}

export default RepsTracker;