import { useCallback } from 'react';
import { useApiClient } from '@/shared/lib/axios';

export const usePostEncounters = () => {
  const { api } = useApiClient();
  const postEncounters = useCallback(
    async (encounteredUserId: string, githubUserId: string) => {
      if (!api) return;
      try {
        await api.v1.encounters.$post({
          body: { encounted_user_id: encounteredUserId, user_id: githubUserId },
        });
      } catch (error) {
        throw error;
      }
    },
    [api],
  );
  return { postEncounters };
};
