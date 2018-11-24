import React, { Component } from 'react';
import './App.css';
import './SpotifySDK';
import Room from "./pages/Room";
import Authenticate from "./pages/Authenticate";
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
        <Router>
          <div className="app">
            <Route
                path="/start"
                component={Room}
            />
            <Route
                path="/"
                exact
                component={Authenticate}
            />
          </div>
        </Router>
    );
  }
}

export default App;
