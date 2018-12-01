import axios from 'axios';

const client = axios.create({
  baseURL: 'https://api.spotify.com/v1'
});

export const search = (token, query) => {
  return client.get(`/search?type=track&limit=5&q=${query}`, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      }
  });
};

export const skip = (token) => {
  return client.post(`/me/player/next`, {}, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    }
  });
};

export const playerState = (token) => {
  return client.get(`/me/player`, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    }
  });
};
