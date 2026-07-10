import { createBrowserRouter } from 'react-router';
import Home from '../pages/Home';
import Favourite from '../pages/Favourite';
import Games from '../pages/Games';
import MainLayout from '../layout/MainLayout';
import { gamesDetailLoader, gamesLoader } from '../services/gamesLoader';
import GamesDetails from '../pages/GamesDetails';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    hydrateFallbackElement: <p>Loading...</p>,
    children: [
      {
        index: true,
        element: <Home />,
        loader: gamesLoader,
      },
      {
        path: 'favourite',
        element: <Favourite />,
      },
      {
        path: 'games',
        element: <Games />,
      },
      {
        path: 'games/:id',
        element: <GamesDetails />,
        loader: gamesDetailLoader,
      },
    ],
  },
]);
