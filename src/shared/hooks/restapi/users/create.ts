import { useCallback } from 'react';
import { useApiClient } from '@/shared/lib/axios';
import { CurrentUser } from '@/shared/types/CurrentUser';

export const useCreateUser = () => {
  const { api } = useApiClient();
  const createUser = useCallback(
    async (currentUser: CurrentUser) => {
      if (!api) return;
      try {
        await api.v1.users.$post({
          body: { github_id: currentUser.userName ?? '' },
          headers: {
            Authorization: currentUser.token ?? '',
          },
        });
      } catch (error) {
        throw error;
      }
    },
    [api],
  );

  return { createUser };
};
