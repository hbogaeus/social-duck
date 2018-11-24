import React, { Component } from 'react';
import './App.css';
import './SpotifySDK';
import Start from "./pages/Start";
import Room from "./pages/Room";
import Authenticate from "./pages/Authenticate";
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <Router>
          <div className="app">
            <Route path="/room" component={Room} />
            <Route path="/start" component={Start} />
            <Route path="/" exact component={Authenticate} />
          </div>
        </Router>
    );
  }
}

export default App;
