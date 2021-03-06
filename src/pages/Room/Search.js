import React, { Component } from 'react';
import Camera from 'react-feather/dist/icons/x';
import * as API from '../../api';
import SearchItem from "./SearchItem";
import classnames from 'classnames';

class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      query: '',
      overlayOpen: false,
      result: []
    };

    this.handleQueryChange = this.handleQueryChange.bind(this);
    this.performSearch = this.performSearch.bind(this);
    this.openOverlay = this.openOverlay.bind(this);
    this.closeOverlay = this.closeOverlay.bind(this);
  }

  componentWillUnmount() {
    if (this.timeoutId) clearTimeout(this.timeoutId);
  }

  performSearch() {
    const { query } = this.state;
    const { token } = this.props;

    if (query.trim() !== '') {
      API.search(token, query)
          .then(response => this.setState({
            result: response.data.tracks.items,
          }));
    }
  }

  handleQueryChange(event) {
    if (this.timeoutId) clearTimeout(this.timeoutId);
    this.timeoutId = setTimeout(this.performSearch, 100);

    this.setState({
      query: event.target.value
    });
  }

  openOverlay() {
    this.setState({
      overlayOpen: true
    });
  }

  closeOverlay() {
    this.setState({
      overlayOpen: false,
      query: '',
      result: []
    });
  }

  render() {
    const { query, result, overlayOpen } = this.state;
    const { sendTrack } = this.props;

    return (
        <div className="search-main">
          <input
              placeholder="Search..."
              className={classnames("search-input", {"open": overlayOpen})}
              value={query}
              onFocus={this.openOverlay}
              onChange={this.handleQueryChange}
          />
          <div className={classnames("overlay", {"open": overlayOpen})}>
            <button className="overlay-close-button" onClick={this.closeOverlay}>
              <Camera color="white" size={48} />
            </button>
            <div className="results">
              {result.map(item => (
                  <SearchItem
                      key={item.id}
                      name={item.name}
                      artists={item.artists.map(artist => artist.name).join(', ')}
                      albumImageURL={item.album.images[0].url}
                      handleTrackClick={() => sendTrack(item.uri)}
                  />
              ))}
            </div>
          </div>
        </div>
    )
  }
}

export default Search;
