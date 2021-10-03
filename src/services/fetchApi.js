import axios from 'axios';
import { BASE_URL } from '../constants/constants';

axios.defaults.baseURL = BASE_URL;

export const fetchNews = async (page = 1,req='news') => {
  const params = `${req}/${page}.json`;
  const response = await axios.get(`${params}`);
  return response.data;
}


