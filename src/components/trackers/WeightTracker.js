import React, {useState} from 'react';

const WeightTracker = props => {

    return (
        <div className="list">
            <p>Weight: {props.weight}</p>
            <button onClick={props.increaseWeight}>Increase Weight</button>
            <button onClick={props.clearWeight}>Clear Weight</button>
        </div>
    );
}

export default WeightTracker;