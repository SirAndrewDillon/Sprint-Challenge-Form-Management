import React from 'react';
// import { Route } from 'react-router-dom';
import './App.css';
import Login from './components/RegistrationForm';
import ShowData from './components/ShowData';

function App() {
  return (
    <div className='App'>
      <Login />
      <ShowData />
    </div>
  );
}

export default App;
