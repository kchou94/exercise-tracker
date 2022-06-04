import React, { useState } from 'react';
import { useHistory } from "react-router-dom";

export const AddExercisePage = () => {
    const history = useHistory();
    const [name, setName] = useState('');
    const [reps, setReps] = useState('');
    const [weight, setWeight] = useState('');
    const [unit, setUnit] = useState('');
    const [date, setDate] = useState('');

    const addExercise = async (e) => {
        e.preventDefault();
        const exerciseData = { name, reps, weight, unit, date }
        const response = await fetch('/exercises', {
            method: 'POST',
            body: JSON.stringify(exerciseData),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        if (response.status !== 201) {
            alert("Creation failed!");
            console.error(`Failed to create! Status code: ${response.status}`);
            history.push('/');
        } else {
            alert("Exercise created!");
            history.push('/');
        }
    }

    return (
        <div>
            <h1>Add Exercise</h1>
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
                <button onClick={addExercise}>SUBMIT</button>
            </form>
        </div>
    );
}

export default AddExercisePage;