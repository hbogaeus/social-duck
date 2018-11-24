import React, { Component } from 'react';
import qs from 'qs';
import {Link} from "react-router-dom";

class Start extends Component {
  constructor(props) {
    super(props);

    this.state = {
      room: ''
    };

    this.code = qs.parse(window.location.search)['?code'];

    if (!this.code) {
      throw new Error("Failed to open socket")
    }

    this.handleChange = this.handleChange.bind(this);
    this.createRoom = this.createRoom.bind(this);
    this.joinRoom = this.joinRoom.bind(this);
  }

  handleChange(event) {
    const { name, value} = event.target;

    this.setState({
      [name]: value
    })
  }

  createRoom() {
    const socket = new WebSocket(`ws://localhost:1337/create?code=${this.code}`);
    console.log(socket)
  }

  joinRoom() {
    const { room } = this.state;

    const socket = new WebSocket(`ws://localhost:1337/join?code=${this.code}&room=${room}`);
  }

  render() {
    const { room } = this.state;

    return (
        <div>
          <button onClick={this.createRoom}>Test</button>
          <span className="duck">🦆</span>
          <Link
              to="/room"
          >
            Create
          </Link>
          <div>
            <input
                name="room"
                value={room}
                onChange={this.handleChange}
            />
            <Link
                to="/room"
            >
              Join
            </Link>
          </div>
        </div>
    )
  }
}

export default Start;
