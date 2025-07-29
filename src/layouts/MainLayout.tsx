import { Outlet } from 'react-router';

import { Footer, Header } from '@/components';

const MainLayout = () => {
  return (
    <div className="flex flex-col h-screen place-items-center ">
      <Header />

      <main className="w-full flex-1 overflow-y-auto p-2 max-w-screen-xl mx-auto">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default MainLayout;
