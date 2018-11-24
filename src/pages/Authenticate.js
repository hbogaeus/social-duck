import React, { Component } from 'react';

const PRODUCTION = false;

const CLIENT_ID = '40770eb505e84f249d9fbbd4b0abb732';
const REDIRECT_URI = PRODUCTION ? 'http://socialduck.co/start' : 'http://localhost:3000/start';
const RESPONSE_TYPE = 'code';
const SCOPES = ['user-modify-playback-state', 'user-read-playback-state'];

const authURL = `https://accounts.spotify.com/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPES.join(' ')}`;

class Authenticate extends Component {
  constructor(props) {
    super(props);

    window.location.replace(authURL);
  }

  render() {
    return <h1>Redirecting...</h1>
  }
}

export default Authenticate;