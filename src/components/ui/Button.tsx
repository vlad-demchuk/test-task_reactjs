import React from 'react';

import { twMerge } from 'tailwind-merge';

type ButtonVariant = 'primary' | 'destructive';

interface Props extends React.ComponentPropsWithoutRef<'button'> {
  variant?: ButtonVariant;
}

const defaultStyles =
  'h-10 p-1.5 border rounded-sm cursor-pointer transition-colors';

const buttonVariants: Record<ButtonVariant, string> = {
  primary: 'border-black text-white bg-black hover:bg-white hover:text-black',
  destructive:
    'border-gray-200 text-black bg-gray-200 hover:bg-gray-300 hover:text-red-black',
};

export const Button = ({
  variant = 'primary',
  className,
  children,
  ...props
}: Props) => {
  return (
    <button
      className={twMerge(defaultStyles, buttonVariants[variant], className)}
      {...props}
    >
      {children}
    </button>
  );
};
