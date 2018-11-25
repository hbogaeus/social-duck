import React, { PureComponent } from 'react';

class SongListItem extends PureComponent {
  render() {
    const {name, uri, artists, albumImageURL, handleTrackClick, canVote} = this.props;

    return (
        <div className="song-list-item">
          <img className="song-list-item-image" src={albumImageURL} />
          <div className="song-list-item-content">
            <span className="song-list-item-title">{name}</span>
            <span className="song-list-item-artist">{artists}</span>
          </div>
          <button
              disabled={!canVote}
              onClick={() => handleTrackClick(uri)}
          >
            Add
          </button>
        </div>
    )
  }
}

export default SongListItem;
