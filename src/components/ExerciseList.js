import React from 'react';
import Exercise from './Exercise';

function ExerciseList({ exercises, deleteExercise, onEdit }) {
    return (
        <table id="exercises">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Reps</th>
                    <th>Weight</th>
                    <th>Date</th>
                    <th>Modify</th>
                </tr>
            </thead>
            <tbody>
                {exercises.map((exercise, i) => <Exercise exercise={exercise} deleteExercise={deleteExercise} onEdit={onEdit}
                    key={i} />)}
            </tbody>
        </table>
    );
}

export default ExerciseList;
