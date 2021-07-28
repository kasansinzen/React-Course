import React from 'react';
import './App.css';
import Todo from './components/Todo';

function App() {
  // document.querySelector('button')?.addEventListener('click')

  return (
    <div>
      <h1>My Todos</h1>
      <Todo text="Learn React" />
      <Todo text="Master React" />
      <Todo text="Explore the full React course" />
    </div>
  );
}

export default App;
