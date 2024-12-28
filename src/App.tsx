import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { createBrowserRouter, RouterProvider } from 'react-router';
import Layout from './layout/inedx';
import { Home, NotFound, Settings } from './pages';

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: '/',
    Component: Layout,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/settings',
        element: <Settings />,
      },
      { path: '*', element: <NotFound /> },
    ],
  },
]);

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
