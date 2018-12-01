import React, {Fragment, PureComponent} from 'react';
import Play from 'react-feather/dist/icons/play';
import Plus from 'react-feather/dist/icons/plus-circle';

class SongListItem extends PureComponent {
  render() {
    const {
      name,
      uri,
      artists,
      nrVotes,
      albumImageURL,
      handleTrackClick,
      canVote,
      isPlaying
    } = this.props;

    return (
        <div className="song-list-item">
          <img className="song-list-item-image" src={albumImageURL}/>
          <div className="song-list-item-content">
            <span className="song-list-item-title">{name}</span>
            <span className="song-list-item-artist">{artists}</span>
          </div>
          {isPlaying ? (
              <Play/>
          ) : (
              <Fragment>
                {canVote && (
                    <button
                        className={'song-list-item-vote-button'}
                        onClick={() => handleTrackClick(uri)}
                    >
                      <Plus size={32}/>
                    </button>
                )}
                <span className="song-list-item-votes">{nrVotes}</span>
              </Fragment>
          )}
        </div>
    )
  }
}

export default SongListItem;
