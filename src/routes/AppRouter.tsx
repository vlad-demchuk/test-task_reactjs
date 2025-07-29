import { Navigate, RouterProvider, createBrowserRouter } from 'react-router';

import { MainLayout } from '@/layouts';
import AboutPage from '@/pages/AboutPage.tsx';
import UsersPage from '@/pages/UsersPage.tsx';
import { routePaths } from '@/routes/paths';
import { lazyRoute, withFallback } from '@/routes/routeHelpers.tsx';

const appRouter = createBrowserRouter([
  {
    path: routePaths.home,
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Navigate to={routePaths.about} replace />,
      },
      {
        path: routePaths.about,
        element: <AboutPage />,
      },
      {
        path: routePaths.users,
        element: <UsersPage />,
      },
    ],
  },
  {
    path: routePaths.notFound,
    ...lazyRoute(() => import('@/pages/NotFound')),
  },
]);

export default function AppRouter() {
  return withFallback(<RouterProvider router={appRouter} />);
}
