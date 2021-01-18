import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Landing from './Landing';
import Signin from './Signin';
import Signup from './Signup';
import { AuthRoute, ProtectedRoute } from './SpecialRoutes';
import Profolio from './profolio/profolio_container';
function App() {
  const loggedIn = false;
  return (
    <div>
      <Navbar loggedIn={loggedIn} />
      <Switch>
        <AuthRoute exact path="/signin" component={Signin} />
        <AuthRoute exact path="/signup" component={Signup} />
        <ProtectedRoute exact path="/profolio" component={Profolio} />
        <Route exact path="/" component={Landing} />
      </Switch>
    </div>
  );
}

export default App;
