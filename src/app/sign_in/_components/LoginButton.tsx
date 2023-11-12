'use client';

import { useCallback } from 'react';
import { Button } from '@/shared/components/common/Button';
import { useAuth } from '@/shared/components/hooks/auth/AuthContext';

export const LoginButton = () => {
  const { login } = useAuth();
  const handleClick = useCallback(async () => {
    login && (await login());
  }, [login]);

  return <Button onClick={handleClick}>GitHubでサインイン</Button>;
};
