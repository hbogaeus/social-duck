import React, { PureComponent } from 'react';
import classnames from 'classnames';

class SongListItem extends PureComponent {
  render() {
    const {name, uri, artists, nrVotes, albumImageURL, handleTrackClick, canVote} = this.props;

    return (
        <div className="song-list-item">
          <img className="song-list-item-image" src={albumImageURL} />
          <div className="song-list-item-content">
            <span className="song-list-item-title">{name}</span>
            <span className="song-list-item-artist">{artists}</span>
          </div>
          <span className="song-list-item-votes">{nrVotes}</span>
          <button
              className={classnames({'do-not-show': !canVote})}
              disabled={!canVote}
              onClick={() => handleTrackClick(uri)}
          >
            Vote
          </button>
        </div>
    )
  }
}

export default SongListItem;
