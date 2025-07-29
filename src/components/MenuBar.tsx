import clsx from 'clsx';
import { NavLink } from 'react-router';

import { routePaths } from '@/routes/paths.ts';

const links = [
  {
    id: 1,
    label: 'About',
    href: routePaths.about,
  },
  {
    id: 2,
    label: 'Users',
    href: routePaths.users,
  },
];

export const MenuBar = () => {
  return (
    <nav className="max-w-40 flex gap-20 my-2">
      {links.map(({ id, label, href }) => (
        <NavLink
          className={({ isActive }) =>
            clsx(
              'block p-2 rounded-md transition-colors',
              isActive && 'bg-gray-200',
            )
          }
          key={id}
          to={href}
        >
          {label}
        </NavLink>
      ))}
    </nav>
  );
};
