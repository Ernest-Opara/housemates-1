import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
// When we create these components we will uncomment them
import Home from './components/Home'
import Signup from './components/Signup'
import Login from './components/Login'
import './App.css'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' exact={true} component={Home} />
        <Route path='/login' component={Login} />
        <Route path='/signup' component={Signup} />
      </Switch>
    </Router>
  )
}

export default App
