'use client';

import { useCallback } from 'react';
import { Button } from '@/shared/components/common/Button';
import { useAuth } from '@/shared/components/hooks/auth';
import { useCreateUser } from '@/shared/hooks/restapi/users';

export const LoginButton = () => {
  const { login } = useAuth();
  const { createUser } = useCreateUser();
  const handleClick = useCallback(async () => {
    if (!login) return;
    const currentUser = await login();
    currentUser && (await createUser(currentUser));
  }, [createUser, login]);

  return <Button onClick={handleClick}>GitHubでサインイン</Button>;
};
