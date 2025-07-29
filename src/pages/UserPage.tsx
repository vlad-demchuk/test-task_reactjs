import React from 'react';

import { Link, useLoaderData } from 'react-router';

import { routePaths } from '@/routes/paths.ts';

import { Button } from '@/components/ui';

import type { User } from '@/features/users/types';

function UserPage() {
  const user = useLoaderData() as User;

  const { firstName, lastName, gender, email } = user;

  return (
    <>
      <section className="max-w-90 mx-auto flex gap-4">
        <Link to={routePaths.users}>
          <Button>Back</Button>
        </Link>

        <div>
          <p>First Name: {firstName}</p>
          <p>Last Name: {lastName}</p>
          <p>Gender: {gender}</p>
          <p>Email: {email}</p>
        </div>
      </section>
    </>
  );
}

export default UserPage;
