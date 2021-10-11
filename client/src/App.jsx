import { useState } from 'react'
import './App.css'
import logo from "./logo.png"
import Launches from './components/Launches'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Launch from './components/Launch'

function App() {
  return (
      <Router>
        <div className="App container">
          <img src={logo} style={{ width: 300, display: "block", margin: "auto" }} />
          <Switch>
            <Route exact path="/" component={Launches} />
            <Route exact path="/launch/:flight_number" component={Launch} />
          </Switch>
        </div>
      </Router>
  )
}

export default App
