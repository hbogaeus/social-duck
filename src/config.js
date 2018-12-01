const PRODUCTION = false;

export const CLIENT_ID = '40770eb505e84f249d9fbbd4b0abb732';
export const REDIRECT_URI = PRODUCTION ? 'http://socialduck.co/start' : 'http://localhost:3000/start';
export const RESPONSE_TYPE = 'code';
export const SCOPES = ['user-modify-playback-state', 'user-read-playback-state'];
export const WS_BASE = PRODUCTION ? 'ws://socialduck.co:1337' : 'ws://localhost:1337';
