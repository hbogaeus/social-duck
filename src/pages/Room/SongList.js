import React, {PureComponent} from 'react';
import SongListItem from "./SongListItem";
import some from 'lodash/some';

class SongList extends PureComponent {
  render() {
    const {trackList, userId, sendTrack} = this.props;



    return (
        <div className="song-list-main">
          {trackList.map(track => {
            console.log(track);
            console.log(userId);
            const canVote = !some(track.voters, voter => voter.user_id === userId);

            console.log(canVote);

            return (
                <SongListItem
                    key={track.uri}
                    name={track.uri}
                    canVote={canVote}
                />
                )
          })}
        </div>
    );
  }
}

export default SongList;