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

            return (
                <SongListItem
                    key={track.uri}
                    name={track.uri}
                    canVote={canVote}
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