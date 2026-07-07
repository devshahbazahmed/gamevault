import { useEffect } from 'react';
import { getAllGames } from '../api/api.js';

const Home = () => {
  useEffect(() => {
    getAllGames();
  }, []);
  return <div>HomePage</div>;
};

export default Home;
