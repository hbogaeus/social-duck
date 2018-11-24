import React, {Component, Fragment} from 'react';
import PlayerControl from "./PlayerControl";
import Search from "./Search";
import SongList from "./SongList";
import qs from 'qs';
import './Room.css';
import UserInfo from "./UserInfo";

const TOKEN = 'BQC499QL6Pl55wXiR9HpWoSRxZ2c9jooNHcPEp_-RgVSfyCPSwfWLofs1h75VI2LqOLf93VO1SLpkmqr0NztUUuzZA9nhLyNcfEDjk5Ct7Dz40s0FybKAq_cRgUfL67MAOnm9TR1VBwD5UaA-H3byXt4YUBlBzJpJKbm2AKXaviMVA_joEJfy3D7FRMpjU36fJuS';

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

    this.setState({
      [name]: value
    })
  }

  handleMessageEvent(unparsedMessage) {
    const message = JSON.parse(unparsedMessage);
    console.log(message);
    switch (message.type) {
      case 'init':
        this.setState({
          token: message.token,
          roomId: message.room_id,
          user: {
            name: message.display_name,
            profileImage: message.profile_image
          }
        });
        break;
      default:
        console.error(`Unknown message type: ${message.type}`);
    }
  }

  createRoom() {
    this.socket = new WebSocket(`ws://localhost:1337/create?code=${this.code}`);
    this.socket.addEventListener('open', () => this.setState({
      socketReady: true,
      isRoomOwner: true,
    }));

    this.socket.addEventListener('message', (event) => this.handleMessageEvent(event.data));
  }

  joinRoom() {
    const {roomCode} = this.state;

    this.socket = new WebSocket(`ws://localhost:1337/join?code=${this.code}&room=${roomCode}`);
    this.socket.addEventListener('open', () => this.setState({
      socketReady: true,
      isRoomOwner: false,
    }));

    this.socket.addEventListener('message', (event) => this.handleMessageEvent(event.data));
  }

  sendMessage(type, data) {
    const { roomId } = this.state;
    const message = {
      type: type,
      room_id: roomId,
      data: data
    };

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
      token,
      user,
      trackList
    } = this.state;

    return (
        <div>
          {socketReady ? (
              <Fragment>
                <Search
                    token={token}
                    sendTrack={this.sendTrack}
                />
                {user && (
                    <UserInfo
                        name={user.name}
                        profileImage={user.profileImage}
                    />)}
                <SongList trackList={trackList}/>
                {isRoomOwner && <PlayerControl/>}
              </Fragment>
          ) : (
              <div>
                <button onClick={this.createRoom}>Create</button>
                <div>
                  <input
                      name="room"
                      value={roomCode}
                      onChange={this.handleChange}
                  />
                  <button onClick={this.joinRoom}>Join</button>
                </div>
              </div>
          )}
        </div>
    )
  }
}

export default Room;