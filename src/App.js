import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AddExercisePage from './pages/AddExercisePage';
import EditExercisePage from './pages/EditExercisePage';
import Navigation from './pages/Navigation';

function App() {
  const [exerciseToEdit, setExerciseToEdit] = useState([]);

  return (
    <div className="App">

      <Router>

        <div className="App-header">
          <Navigation />
          <header>
            <h1>Exercise Tracker 9000</h1>
            <p>A diary for your daily exercises</p>
          </header>
          <Route path="/" exact>
            <HomePage setExerciseToEdit={setExerciseToEdit} />
          </Route>
          <Route path="/add-exercise">
            <AddExercisePage />
          </Route>
          <Route path="/edit-exercise">
            <EditExercisePage exercise={exerciseToEdit} />
          </Route>
        </div>
      </Router>
      <footer>
        © 2022 Kevin Chou
      </footer>
    </div>
  );
}

export default App;