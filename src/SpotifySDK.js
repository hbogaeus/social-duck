/*
window.onSpotifyWebPlaybackSDKReady = () => {
  const token = 'BQC8pUDkB8KTsvNs9lnHHC_CHhenQHv0cJ6orMbgfsj3uhCKF1Fi_hKwa6SNEfQsYk5EFuWeCArPE_Yru2T-ITlaBrJLgUPaBklSLbEfX-mnG0lpYLDY-ZpwP2vte6X3-dMFSRGVB_He0wxdDV1xgCqcG5Sen7OR23p3cA';
  // eslint-disable-next-line no-undef
  const player = new Spotify.Player({
    name: 'Social Duck',
    getOAuthToken: cb => { cb(token); }
  });

  // Error handling
  player.addListener('initialization_error', ({ message }) => { console.error(message); });
  player.addListener('authentication_error', ({ message }) => { console.error(message); });
  player.addListener('account_error', ({ message }) => { console.error(message); });
  player.addListener('playback_error', ({ message }) => { console.error(message); });

  // Playback status updates
  player.addListener('player_state_changed', state => { console.log(state); });

  // Ready
  player.addListener('ready', ({ device_id }) => {
    console.log('Ready with Device ID', device_id);
  });

  // Not Ready
  player.addListener('not_ready', ({ device_id }) => {
    console.log('Device ID has gone offline', device_id);
  });

  // Connect to the player!
  player.connect();
};
*/