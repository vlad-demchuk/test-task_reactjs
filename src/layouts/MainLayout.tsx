import { Outlet } from 'react-router';

import { Footer, Header } from '@/components';

const MainLayout = () => {
  return (
    <div className="flex flex-col h-screen place-items-center">
      <Header />

      <main className="flex-1 overflow-y-auto p-2">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default MainLayout;
