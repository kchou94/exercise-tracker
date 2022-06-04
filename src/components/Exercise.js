import React from 'react';
import { FiEdit2, FiDelete } from 'react-icons/fi'

function Exercise({ exercise, deleteExercise, onEdit }) {
    return (
        <tr>
            <td>{exercise.name}</td>
            <td>{exercise.reps}</td>
            <td>{exercise.weight} {exercise.unit}</td>
            <td>{exercise.date}</td>
            <td><FiEdit2 onClick={() => onEdit(exercise)} /><FiDelete onClick={() => deleteExercise(exercise._id)} /></td>
        </tr>
    );
}

export default Exercise;