import { useCallback } from 'react';
import { useApiClient } from '@/shared/lib/axios';

export const useCreateUser = () => {
  const { api } = useApiClient();
  const createUser = useCallback(
    async (githubId: string) => {
      if (!api) return;
      try {
        await api.users.$post({ body: { github_id: githubId } });
      } catch (error) {
        throw error;
      }
    },
    [api],
  );

  return { createUser };
};
