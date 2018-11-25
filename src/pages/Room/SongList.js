import React, {PureComponent} from 'react';
import SongListItem from "./SongListItem";
import some from 'lodash/some';

const img = 'https://scontent-arn2-1.cdninstagram.com/vp/78951fbb8463e8ecff3c99861290ef08/5C68FAA7/t51.2885-15/sh0.08/e35/s640x640/43779094_708153776223268_8486921655170464021_n.jpg';

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
                    artists={'artists'}
                    albumImageURL={img}
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