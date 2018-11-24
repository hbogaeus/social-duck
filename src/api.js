import axios from 'axios';

export const search = (token, query) => {
  return axios.get(`https://api.spotify.com/v1/search?type=track&limit=5&q=${query}`, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      }
  });
};
