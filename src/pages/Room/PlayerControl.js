import React, { PureComponent } from 'react';
import SkipForward from 'react-feather/dist/icons/skip-forward';
import * as API from '../../api';

class PlayerControl extends PureComponent {
  constructor(props) {
    super(props);

    this.handleSkipClick = this.handleSkipClick.bind(this);
  }

  handleSkipClick() {
    const {token} = this.props;
    API.skip(token);
  }


  render() {
    return (
        <div className="player-control-main">
          <button className="player-control-skip-button" onClick={this.handleSkipClick}>
            <SkipForward size={40}/>
          </button>
        </div>
    )
  }
}

export default PlayerControl;