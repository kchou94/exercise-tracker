import React, { useState } from 'react';
import { useHistory } from "react-router-dom";

export const EditExercisePage = ({ exercise }) => {
    const history = useHistory();
    const [name, setName] = useState(exercise.name);
    const [reps, setReps] = useState(exercise.reps);
    const [weight, setWeight] = useState(exercise.weight);
    const [unit, setUnit] = useState(exercise.unit);
    const [date, setDate] = useState(exercise.date);

    const editExercise = async (e) => {
        e.preventDefault();
        const exerciseData = { name, reps, weight, unit, date }
        const response = await fetch(`/exercises/${exercise._id}`, {
            method: 'PUT',
            body: JSON.stringify(exerciseData),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        if (response.status !== 200) {
            alert("Update failed!");
            console.error(`Failed to edit _id ${exercise._id}! Status code: ${response.status}`);
        } else {
            alert("Update successful!");
        }
        history.push('/');
    }

    return (
        <div>
            <h1>Edit Exercise</h1>
            <h2>Editing {exercise.name}</h2>
            <form>
                <fieldset>
                    <label>Name:
                        <input type="text" value={name} onChange={e => setName(e.target.value)} />
                    </label>
                    <label>Reps:
                        <input type="number" value={reps} onChange={e => setReps(e.target.value)} />
                    </label>
                    <label>Weight
                        <input type="number" placeholder="Weight" value={weight} onChange={e => setWeight(e.target.value)} />
                        <select value={unit} onChange={e => setUnit(e.target.value)}>
                            <option value="kgs">kgs</option>
                            <option value="lbs">lbs</option>
                        </select>
                    </label>
                    <label>Date
                        <input type="text" placeholder="MM-DD-YY" value={date} onChange={e => setDate(e.target.value)} />
                    </label>
                </fieldset>
                <button onClick={editExercise}>SUBMIT</button>
            </form>
        </div>
    );
}

export default EditExercisePage;