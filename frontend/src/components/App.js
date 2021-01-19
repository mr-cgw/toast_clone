import React from 'react';
import { useLocation } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Landing from './Landing';
import Signin from './Signin';
import Signup from './Signup';
import EditForm from './profolio/edit_form';
import { AuthRoute, ProtectedRoute } from './SpecialRoutes';
import Profolio from './profolio/profolio_container';
import ApplicationList from './ApplicationList';
import ApplicationDetailItem from './ApplicationDetailItem';
import Footer from './Footer';
import Charts from './charts/allChartsContainer'

import AppPostForm from './appForms/appPostForm'
function App() {
  const loggedIn = false;
  const location = useLocation();
  return (
    <div>
      <Navbar loggedIn={loggedIn} />
      <Switch>
        <AuthRoute exact path="/signin" component={Signin} />
        <AuthRoute exact path="/signup" component={Signup} />
        <ProtectedRoute exact path="/edit" component={Profolio} />
        <Route exact path="/" component={Landing} />
        {/* <ProtectedRoute exact path='/edit' component={EditForm} /> */}
        <Route exact path="/item" component={ApplicationDetailItem} />
        <Route exact path="/list" component={ApplicationList} />
      </Switch>
      {location.pathname === '/signin' || location.pathname === '/signup' ? (
        <div></div>
      ) : (
          <Footer />
        )}
      {/* <AppPostForm job={{
        "id": "fc829ec9-cf3b-4ca6-bce4-edf492f9f62c",
        "company": "Workist GmbH",
        "position": "(Senior) Backend Engineer",
        "location": "Berlin",
        "createdAt": "Mon Jan 18 10:08:02 UTC 2021",
        "companyLogo": "https://jobs.github.com/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBckNWIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--d15c9a5524ae780e7386e6569c40b0bbabc092e1/Workist%20GmbH.png"
      }} /> */}
      {/* <Charts /> */}
    </div>
  );
}

export default App;
