import React, { Component } from 'react';
import PlayerControl from "./PlayerControl";
import Search from "./Search";
import SongList from "./SongList";
import './Room.css';

const TOKEN = 'BQC499QL6Pl55wXiR9HpWoSRxZ2c9jooNHcPEp_-RgVSfyCPSwfWLofs1h75VI2LqOLf93VO1SLpkmqr0NztUUuzZA9nhLyNcfEDjk5Ct7Dz40s0FybKAq_cRgUfL67MAOnm9TR1VBwD5UaA-H3byXt4YUBlBzJpJKbm2AKXaviMVA_joEJfy3D7FRMpjU36fJuS';

class Room extends Component {
  render() {
    return (
        <div>
          <Search token={TOKEN} />
          <SongList/>
          <PlayerControl/>
        </div>
    )
  }
}

export default Room;