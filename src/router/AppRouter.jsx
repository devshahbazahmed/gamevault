import { createBrowserRouter } from 'react-router';
import Home from '../pages/Home';
import Favourite from '../pages/Favourite';
import Games from '../pages/Games';
import MainLayout from '../layout/MainLayout';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'favourite',
        element: <Favourite />,
      },
      {
        path: 'games',
        element: <Games />,
      },
    ],
  },
]);
