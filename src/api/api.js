import axios from 'axios';
import { API_URL, API_KEY } from '../constants/index.js';

const apiInstance = axios.create({
  baseURL: `${API_URL}?key=${API_KEY}`,
});

export async function getAllGames() {
  const response = await apiInstance.get('');
  console.log(response);
}
