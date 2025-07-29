import { useLocation } from 'react-router';

import { pathToTitle, routePaths } from '@/routes/paths.ts';

export const Header = () => {
  const location = useLocation();

  const title = pathToTitle[location.pathname] ?? pathToTitle[routePaths.about];
  return (
    <header className="h-14 w-full flex justify-center items-center border-b border-gray-200">
      <h2>{title}</h2>
    </header>
  );
};
