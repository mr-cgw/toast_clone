import React from 'react';
import { Switch } from 'react-router-dom';
import Navbar from './Navbar';

function App() {
  const loggedIn = false;
  return (
    <div>
      <Navbar loggedIn={loggedIn} />
      <Switch></Switch>
    </div>
  );
}

export default App;
