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
    children: [
      {
        index: true,
        element: <Home />,
        loader: gamesLoader,
        hydrateFallbackElement: (
          <p className="text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            Loading...
          </p>
        ),
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
        hydrateFallbackElement: (
          <p className="text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            Loading...
          </p>
        ),
      },
    ],
  },
]);
