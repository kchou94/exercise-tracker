import React from 'react';
import { Link } from 'react-router-dom';
import ExerciseList from '../components/ExerciseList';
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

function HomePage({ setExerciseToEdit }) {
    const history = useHistory();
    const [exercises, setExercises] = useState([]);

    const loadExercises = async () => {
        const response = await fetch('/exercises');
        const data = await response.json();
        setExercises(data);
    }

    const deleteExercise = async _id => {
        const response = await fetch(`/exercises/${_id}`, {
            method: 'DELETE'
        });
        if (response.status === 204) {
            loadExercises();
        } else {
            console.error(`Could not delete id ${_id}, status code ${response.status}`);
        }
    }

    const onEdit = toEdit => {
        setExerciseToEdit(toEdit);
        history.push("/edit-exercise")
    }

    useEffect(() => {
        loadExercises();
    }, []);

    return (
        <>
            <h2>List of Exercises</h2>
            <ExerciseList exercises={exercises} deleteExercise={deleteExercise} onEdit={onEdit}></ExerciseList>
            <Link to="/add-exercise">Add an exercise</Link>
        </>
    );
}

export default HomePage;