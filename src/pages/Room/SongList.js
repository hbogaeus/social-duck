import React, {PureComponent} from 'react';
import SongListItem from "./SongListItem";
import some from 'lodash/some';

class SongList extends PureComponent {
  render() {
    const {trackList, userId, sendTrack} = this.props;

    return (
        <div className="song-list-main">
          {trackList.map(track => {
            const canVote = !some(track.voters, voter => voter.user_id === userId);
            const nrVotes = track.voters.length;

            return (
                <SongListItem
                    key={track.uri}
                    name={track.name}
                    artists={track.artist}
                    albumImageURL={track.image}
                    canVote={canVote}
                    nrVotes={nrVotes}
                    handleTrackClick={sendTrack}
                    uri={track.uri}
                />
                )
          })}
        </div>
    );
  }
}

export default SongList;