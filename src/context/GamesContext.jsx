import { useState } from 'react';
import { createContext } from 'react';

export const GamesDataContext = createContext({});

const GamesContext = ({ children }) => {
  const [favourite, setFavourite] = useState([]);

  const addToFav = (game) => {
    setFavourite((prev) => {
      const exists = prev.find((item) => item.id === game.id);
      if (exists) return prev;
      else return [...prev, game];
    });
  };
  return (
    <GamesDataContext.Provider value={{ addToFav, favourite }}>
      {children}
    </GamesDataContext.Provider>
  );
};

export default GamesContext;
