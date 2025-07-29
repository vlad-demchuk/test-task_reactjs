import { Outlet } from 'react-router';

const MainLayout = () => {
  // Use Route Protection if needed
  // const { pathname } = useLocation();
  // if (!isAuthenticated) {
  //   return <Navigate to="/login" state={{ pathname }} replace />;
  // }

  return (
    <>
      <header>Header</header>
      <main>
        <Outlet />
      </main>

      <footer>Navigation</footer>
    </>
  );
};

export default MainLayout;
