import axios from 'axios';

export const get = (url) => {
  return axios.get(url).then((res) => res.data);
};
