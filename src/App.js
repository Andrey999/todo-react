import React from 'react';
import './App.css';

import Todo from './Todo'

function App() {
  return (
    <div className="container">
        <div className="app">
            <h1>TodoApp</h1>

            <Todo />
        </div>
    </div>
  );
}

export default App;
