'use client';

import { useRouter } from 'next/navigation';
import { ReactNode, useEffect } from 'react';
import { useAuth } from '../../hooks/auth/AuthContext';

type Props = {
  children: ReactNode;
};
export const Guard = ({ children }: Props) => {
  const { currentUser } = useAuth();

  const route = useRouter();

  useEffect(() => {
    if (currentUser?.token === null) {
      route.push('/sign_in');
    }
  }, [currentUser, route]);

  if (!currentUser) {
    return <></>;
  }

  return children;
};
