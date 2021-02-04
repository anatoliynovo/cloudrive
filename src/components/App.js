import React from 'react';
import Profile from './authentication/Profile';

import Dashboard from './cloud/Dashboard'

import Signup from './authentication/Signup';
import Login from './authentication/Login';
import PrivateRoute from './authentication/PrivateRoute';
import ForgotPassword from './authentication/ForgotPassword';
import UpdateProfile from './authentication/UpdateProfile';


import { AuthProvider } from '../contexts/AuthContext';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
      <Router>
        <AuthProvider>
          <Switch>

            {/* Cloud */}
            <PrivateRoute exact path='/' component={Dashboard} />
            <PrivateRoute exact path="/folder/:folderId" component={Dashboard}/>


            {/* User */}
            <PrivateRoute path='/user' component={Profile} />
            <PrivateRoute path='/update-profile' component={UpdateProfile} />

            {/* Auth */}
            <Route path='/signup' component={Signup} />
            <Route path='/login' component={Login} />
            <Route path='/forgot-password' component={ForgotPassword} />
          </Switch>
        </AuthProvider>
      </Router>
  );
}

export default App;
