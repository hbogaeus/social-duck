import React, { PureComponent } from 'react';

class SearchItem extends PureComponent {
  render() {
    const {name, artists, albumImageURL, handleTrackClick} = this.props;

    return (
        <div onClick={handleTrackClick} className="search-item">
          <img className="search-item-image" src={albumImageURL} />
          <div className="search-item-content">
            <h3 className="search-item-title">{name}</h3>
            <span className="search-item-artist">{artists}</span>
          </div>
        </div>
    )
  }
}

export default SearchItem;