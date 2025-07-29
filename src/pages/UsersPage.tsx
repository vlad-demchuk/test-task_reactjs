import { useEffect, useState } from 'react';

import { List as UserList } from '@/features/users/components/List.tsx';

import { userService } from '@/features/users/services';
import type { User } from '@/features/users/types';

function UsersPage() {
  const [users, setUsers] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const [query, setQuery] = useState('');

  const handleSearch = (query: string) => {
    setQuery(query);
  };

  const filteredUsers = users.filter((user) =>
    `${user.firstName} ${user.lastName}`
      .toLowerCase()
      .includes(query.trim().toLowerCase()),
  );

  // TODO: Replace with Tanstack Query to cache the results and avoid manual fetching and setting states
  // ideally to move fetching to router loader, but React Router isn't the best choice for doing this
  useEffect(() => {
    let isMounted = true;

    const fetchUsers = async () => {
      try {
        const res = await userService.getAll();
        if (isMounted) setUsers(res.data.users);
      } catch (e) {
        console.error(e);
        if (isMounted) setIsError(true);
      } finally {
        if (isMounted) setIsLoading(false);
      }
    };

    fetchUsers();

    return () => {
      isMounted = false;
    };
  }, []);

  if (isLoading) {
    return <p className="p-4 text-gray-500 text-center">Loading...</p>;
  }

  if (isError) {
    return (
      <p className="p-4 text-red-500">
        Something went wrong. Please try again.
      </p>
    );
  }

  return (
    <section className="w-full">
      <input
        value={query}
        onChange={(e) => handleSearch(e.target.value)}
        type="text"
        className="block border border-gray-400 rounded-md mx-auto mb-4"
        placeholder="Search"
      />

      <UserList users={filteredUsers} />
    </section>
  );
}

export default UsersPage;
