import { createBrowserRouter } from 'react-router';
import Home from '../pages/Home';
import Favourites from '../pages/Favourites';
import Games from '../pages/Games';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/favourites',
    element: <Favourites />,
  },
  {
    path: '/games',
    element: <Games />,
  },
]);
