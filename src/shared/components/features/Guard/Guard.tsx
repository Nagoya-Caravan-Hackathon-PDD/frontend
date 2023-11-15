'use client';

import { useRouter } from 'next/navigation';
import { ReactNode, useEffect } from 'react';
import { useAuth } from '../../hooks/auth/AuthContext';
import { Route } from '@/shared/types/Page';

type Props = {
  children: ReactNode;
};
export const Guard = ({ children }: Props) => {
  const { currentUser } = useAuth();

  const route = useRouter();

  useEffect(() => {
    if (currentUser?.token === null) {
      route.push(Route.root);
    }
  }, [currentUser, route]);

  if (!currentUser) {
    return <></>;
  }

  return children;
};
