import React, {Component} from 'react';
import {CLIENT_ID, REDIRECT_URI, RESPONSE_TYPE, SCOPES} from "../config";

const authURL = `https://accounts.spotify.com/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPES.join(' ')}`;

class Authenticate extends Component {
  constructor(props) {
    super(props);

    window.location.replace(authURL);
  }

  render() {
    return (
        <div className="authenticate-main">
          <h1>Redirecting...</h1>
        </div>
    )
  }
}

export default Authenticate;