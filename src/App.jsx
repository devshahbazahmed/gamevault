import { router } from './router/AppRouter';
import { RouterProvider } from 'react-router';

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
