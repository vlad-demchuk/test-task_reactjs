import { Card } from '@/features/users/components/Card.tsx';

import type { User } from '@/features/users/types';

interface Props {
  users: User[];
}

export const List = ({ users }: Props) => {
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-[repeat(auto-fill,minmax(250px,1fr))]  gap-4 w-full mx-auto justify-items-center">
      {users.map((user) => (
        <Card key={user.id} user={user} />
      ))}
    </ul>
  );
};
