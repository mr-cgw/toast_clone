import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Landing from './Landing';
import Signin from './Signin';
import Signup from './Signup';

function App() {
  const loggedIn = false;
  return (
    <div>
      <Navbar loggedIn={loggedIn} />
      <Switch>
        <Route exact path="/signin" component={Signin} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/" component={Landing} />
      </Switch>
    </div>
  );
}

export default App;
