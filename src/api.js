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

export const play = (token) => {
  return client.put(`/me/player/play`, {}, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    }
  });
};

export const pause = (token) => {
  return client.put(`/me/player/pause`, {}, {
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
