import React, {useState} from 'react';

const DistanceTracker = props => {

    return (
        <div className="list">
            <p>Distance: {props.distance}</p>
            <button onClick={props.increaseDistance}>Increase Distance</button>
            <button onClick={props.clearDistance}>Clear Distance</button>
        </div>
    );
}

export default DistanceTracker;