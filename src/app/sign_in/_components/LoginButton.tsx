'use client';

import { useRouter } from 'next/navigation';
import { useCallback } from 'react';
import { Button } from '@/shared/components/common/Button';
import { useAuth } from '@/shared/components/hooks/auth/AuthContext';
import { Route } from '@/shared/types/Page';

export const LoginButton = () => {
  const { login } = useAuth();
  const router = useRouter();
  const handleClick = useCallback(async () => {
    if (login) {
      await login();
      router.push(Route.root);
    }
  }, [login, router]);

  return <Button onClick={handleClick}>GitHubでサインイン</Button>;
};
