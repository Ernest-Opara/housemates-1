import React from 'react';
// When we create these components we will uncomment them
// import Home from './Home';
// import Signup from './Signup';
import Login from './components/Login';
import './App.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


function App() {
  return (
    <Router>
      <Switch>
        {/* <Route path="/" exact={true} component={Home} /> */}
        <Route path="/login" component={Login} />
        {/* <Route path="/signup" component={Signup} /> */}
      </Switch>
    </Router>
  );
}

export default App;