import React, {useState} from 'react';

const SetsTracker = props => {

    return (
        <div className="list">
            <p>Sets</p>
            <p>{props.sets}</p>
            <button onClick={props.increaseSets}>Add a Set</button>
            <button onClick={props.clearSets}>Clear sets</button>
        </div>
    );
}

export default SetsTracker;