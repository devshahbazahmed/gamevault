import GamesContext from './context/GamesContext';
import { router } from './router/AppRouter';
import { RouterProvider } from 'react-router';

const App = () => {
  return (
    <GamesContext>
      <RouterProvider router={router} />
    </GamesContext>
  );
};

export default App;
