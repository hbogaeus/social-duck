import React, { PureComponent } from 'react';
import * as API from '../../api';

class PlayerControl extends PureComponent {
  constructor(props) {
    super(props);

    this.handlePlayClick = this.handlePlayClick.bind(this);
    this.handleSkipClick = this.handleSkipClick.bind(this);
  }

  handlePlayClick() {
    const {token} = this.props;
    API.play(token);
  }

  handleSkipClick() {
    const {token} = this.props;
    API.skip(token);
  }


  render() {
    return (
        <div className="player-control-main">
          <button onClick={this.handlePlayClick}>Play</button>
          <button onClick={this.handleSkipClick}>Skip</button>
        </div>
    )
  }
}

export default PlayerControl;