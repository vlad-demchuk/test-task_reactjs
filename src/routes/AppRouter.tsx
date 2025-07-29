import { Navigate, RouterProvider, createBrowserRouter } from 'react-router';

import { MainLayout } from '@/layouts';
import AboutPage from '@/pages/AboutPage.tsx';
import NotFound from '@/pages/NotFound.tsx';
import UserPage from '@/pages/UserPage.tsx';
import UsersPage from '@/pages/UsersPage.tsx';
import { routePaths } from '@/routes/paths';
import { lazyRoute, withFallback } from '@/routes/routeHelpers.tsx';

import { userService } from '@/features/users/services';

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
      {
        path: routePaths.userById,
        loader: async ({ params }) => {
          const userId = params.userId!;

          try {
            throw new Response('User not found', { status: 404 });

            const res = await userService.getById(userId);
            return res.data;
          } catch (error) {
            console.error('Failed to load user:', error);
            throw new Response('User not found', { status: 404 });
          }
        },
        element: <UserPage />,
        errorElement: <NotFound />,
      },
      {
        path: routePaths.notFound,
        ...lazyRoute(() => import('@/pages/NotFound')),
      },
    ],
  },
]);

export default function AppRouter() {
  return withFallback(<RouterProvider router={appRouter} />);
}
