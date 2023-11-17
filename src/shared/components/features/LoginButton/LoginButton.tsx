'use client';

import { useRouter } from 'next/navigation';
import { useCallback } from 'react';
import { Button } from '@/shared/components/common/Button';
import { useAuth } from '@/shared/components/hooks/auth';
import { useCreateUser } from '@/shared/hooks/restapi/users';
import { Route } from '@/shared/types/Page';

export const LoginButton = () => {
  const { login } = useAuth();
  const router = useRouter();
  const { createUser } = useCreateUser();
  const handleClick = useCallback(async () => {
    if (!login) return;
    const githubId = await login();
    await createUser(githubId);
    router.push(Route.root);
  }, [login, router, createUser]);

  return <Button onClick={handleClick}>GitHubでサインイン</Button>;
};
