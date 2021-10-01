import React, {useState} from 'react';

const RepsTracker = props => {
    const [ reps, setReps] = useState({ 
        reps: 0 
    });

    const increaseSet = () => {
        // ternarie
        const newRepsNumber = reps.sets >= 10 ? 10 : reps.sets + 1;
        setReps({
            set: newRepsNumber
        })
    }
    const clearSet = () => {
        setReps({
            set: reps.sets = 0
          })
    }
    return (
        <div className="list">
            <h5>Reps</h5>
            <p>{reps.sets}</p>
            <button onClick={increaseSet}>Add a set</button>
            <button onClick={clearSet}>Clear sets</button>
        </div>
    );
}

export default RepsTracker;