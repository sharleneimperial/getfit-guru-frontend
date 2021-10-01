import React, {useState} from 'react';

const DurationTracker = props => {

    return (
        <div className="list">
            <p>Duration</p>
            <p>{props.duration}</p>
            <button onClick={props.increaseDuration}>Add time</button>
            <button onClick={props.clearDuration}>Clear time</button>
        </div>
    );
}

export default DurationTracker;