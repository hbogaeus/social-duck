import React, {Component, Fragment} from 'react';
import PlayerControl from "./PlayerControl";
import Search from "./Search";
import SongList from "./SongList";
import qs from 'qs';
import './Room.css';
import UserInfo from "./UserInfo";

const wsBase = 'ws://localhost:1337';

class Room extends Component {
  constructor(props) {
    super(props);
    this.state = {
      socketReady: false,
      isRoomOwner: null,
      token: null,
      user: null,
      roomCode: '',
      roomId: '',
      trackList: []
    };

    this.code = qs.parse(window.location.search)['?code'];

    if (!this.code) {
      throw new Error("Failed to open socket")
    }

    this.handleChange = this.handleChange.bind(this);
    this.createRoom = this.createRoom.bind(this);
    this.joinRoom = this.joinRoom.bind(this);
    this.sendTrack = this.sendTrack.bind(this);
    this.handleMessageEvent = this.handleMessageEvent.bind(this);
    this.sendMessage = this.sendMessage.bind(this);
  }

  handleChange(event) {
    const {name, value} = event.target;

    if (value.length <= 4) {
      this.setState({
        [name]: value
      })
    }
  }

  handleMessageEvent(unparsedMessage) {
    const message = JSON.parse(unparsedMessage);
    console.log("Received: ", message);
    switch (message.type) {
      case 'init':
        this.setState({
          socketReady: true,
          token: message.token,
          roomId: message.room_id,
          user: {
            name: message.display_name,
            profileImage: message.profile_image,
            userId: message.user_id
          }
        });
        break;
      case 'notify':
        this.setState({
          trackList: [
            message.track,
            ...message.next_tracks
          ]
        });
        break;
      default:
        console.error(`Unknown message type: ${message.type}`);
    }
  }

  createRoom() {
    this.socket = new WebSocket(`${wsBase}/create?code=${this.code}`);
    this.socket.addEventListener('open', () => this.setState({
      isRoomOwner: true,
    }));

    this.socket.addEventListener('message', (event) => this.handleMessageEvent(event.data));
  }

  joinRoom() {
    const {roomCode} = this.state;

    this.socket = new WebSocket(`${wsBase}/join?code=${this.code}&room_id=${roomCode}`);
    this.socket.addEventListener('open', () => this.setState({
      isRoomOwner: false,
    }));

    this.socket.addEventListener('message', (event) => this.handleMessageEvent(event.data));
  }

  sendMessage(type, data) {
    const {roomId} = this.state;

    const message = {
      type: type,
      room_id: roomId,
      data: data
    };

    console.log("Sending: ", message);

    this.socket.send(JSON.stringify(message));
  }

  sendTrack(uri) {
    const data = {
      uri: uri
    };

    this.sendMessage('track', data);
  }

  render() {
    const {
      socketReady,
      isRoomOwner,
      roomCode,
      roomId,
      token,
      user,
      trackList
    } = this.state;

    return (
        <Fragment>
          {socketReady ? (
              <div className="room-main">
                <Search
                    token={token}
                    sendTrack={this.sendTrack}
                />
                <div className="room-header">
                  {user && (
                      <UserInfo
                          name={user.name}
                          profileImage={user.profileImage}
                      />)}
                      <span>
                        {roomId}
                      </span>
                </div>
                <SongList
                    userId={user && user.userId}
                    trackList={trackList}
                    sendTrack={this.sendTrack}
                />
                {isRoomOwner && <PlayerControl
                    token={token}
                />}
              </div>
          ) : (
              <div className="room-start-main">
                <h1 style={{fontSize: '6rem'}}>Social Duck</h1>
                <button
                    style={{
                      width: 240,
                      marginBottom: '2.5rem',
                      paddingTop: 14,
                      paddingBottom: 12
                    }}
                    className="btn btn-default"
                    onClick={this.createRoom}
                >
                  Create
                </button>
                <div
                    style={{width: 240}}
                    className="input-group">
                  <input
                      style={{
                        borderTopLeftRadius: '500px',
                        borderBottomLeftRadius: '500px',
                        paddingLeft: '16px'
                      }}
                      type="text"
                      className="room-code-input form-control"
                      name="roomCode"
                      value={roomCode}
                      onChange={this.handleChange}
                  />
                  <span className="input-group-btn">
                    <button
                        className="btn btn-default"
                        type="button"
                        onClick={this.joinRoom}
                    >
                    Join
                  </button>
                  </span>
                </div>
              </div>
          )}
        </Fragment>
    )
  }
}

export default Room;