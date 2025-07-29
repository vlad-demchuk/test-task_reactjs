import { Link } from 'react-router';

import { Button } from '@/components/ui';

import type { User } from '@/features/users/types';

interface Props {
  user: User;
}

export const Card = ({ user }: Props) => {
  const { id, firstName, lastName, image } = user;
  const title = `${firstName} ${lastName}`;

  return (
    <li className="flex w-full justify-between items-center gap-4  p-4 border border-gray-300 rounded-md">
      <div className="flex flex-col gap-2">
        <h4>{title}</h4>
        <Link to={`/users/${id}`}>
          <Button>Details</Button>
        </Link>
      </div>

      <img className="size-20" src={image} alt="User image" />
    </li>
  );
};
