import React, {PureComponent} from 'react';

class SongList extends PureComponent {
  render() {

    const {trackList} = this.props;

    return (
        <ol>
          {trackList.map(track => (
              <li>
                <span>{track.name}</span>
              </li>
          ))}
        </ol>
    );
  }
}

export default SongList;