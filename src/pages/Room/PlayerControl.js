import React, { Component} from 'react';
import { PlayerIcon } from 'react-player-controls';

class PlayerControl extends Component {
  render() {
    return (
        <div className="player-control-main">
          <button><PlayerIcon.Play/></button>
          <button><PlayerIcon.Next/></button>
        </div>
    )
  }
}

export default PlayerControl;