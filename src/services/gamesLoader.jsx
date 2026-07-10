import { api } from '../api/api';
import { API_KEY } from '../constants';

export const gamesLoader = async () => {
  try {
    const res = await api.get('/games', {
      params: {
        key: API_KEY,
      },
    });
    return res;
  } catch (error) {
    console.log(error.message);
  }
};

export const gamesDetailLoader = async ({ params }) => {
  try {
    const res = await api.get(`/games/${params.id}`, {
      params: {
        key: API_KEY,
      },
    });
    return res;
  } catch (error) {
    console.log(error.message);
  }
};
