import { Link } from 'react-router';

import { routePaths } from '@/routes/paths.ts';

import { Button } from '@/components/ui';

const NotFound = () => {
  return (
    <section className="flex flex-col items-center">
      <h3 className="text-center font-bold text-xl">Page not found</h3>
      <p className="text-center text-balance mb-8">
        The page you are looking for does not exist. Please check the URL or go
        back to the previuos page.
      </p>

      <div className="flex gap-4">
        <Link to={routePaths.about}>
          <Button>About</Button>
        </Link>

        <Link to={routePaths.users}>
          <Button>Users</Button>
        </Link>
      </div>
    </section>
  );
};

export default NotFound;
