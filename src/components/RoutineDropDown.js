import React from "react";

const RoutineDropDown = () => {
    return (
        <div>
            <label htmlFor="muscleGroup">Choose Muscle Group:</label>
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
        </div>
    )
    
}

export default RoutineDropDown;