import { createContext } from 'react';

export const GamesDataContext = createContext({});

const GamesContext = ({ children }) => {
  return (
    <GamesDataContext.Provider value={{}}>{children}</GamesDataContext.Provider>
  );
};

export default GamesContext;
