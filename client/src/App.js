import React from 'react';
// import { Route } from 'react-router-dom';
import './App.css';
import Login from './components/RegistrationForm';
import Menu from './components/Menu'
import ShowData from './components/ShowData';
import JqueryMenu from './components/JqueryMenu'

function App() {
  return (
    <div className='App'>
      <Menu />
      <Login />
      <ShowData />
    </div>
  );
}

export default App;
