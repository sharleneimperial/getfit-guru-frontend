import React, {useState} from 'react';

const SetsTracker = props => {

    return (
        <div className="list">
            <button onClick={props.increaseSets}>Add a Set</button><p>Sets: {props.sets}</p> <button onClick={props.clearSets}>Clear sets</button>
        
        </div>
    );
}

export default SetsTracker;