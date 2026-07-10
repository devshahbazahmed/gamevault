import { api } from '../api/api';
import { API_KEY } from '../constants';

export const gamesLoader = async ({ request }) => {
  try {
    const url = new URL(request.url);

    const search = url.searchParams.get('search') || '';

    const params = {
      key: API_KEY,
    };

    if (search) {
      params.search = search;
    }
    const res = await api.get('/games', { params });
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
