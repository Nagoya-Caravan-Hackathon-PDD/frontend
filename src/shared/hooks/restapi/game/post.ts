import { useCallback } from 'react';
import { useAuth } from '@/shared/components/hooks/auth';
import { useApiClient } from '@/shared/lib/axios';

export const useCreateGame = () => {
  const { api } = useApiClient();
  const { currentUser } = useAuth();
  const createGame = useCallback(async () => {
    if (!api) return;
    if (!currentUser) throw new Error('user is not logged in');

    try {
      const result = await api.v1.game.$post({
        body: { owner_id: currentUser.uid },
        headers: {
          Authorization: `Bearer ${currentUser.token}` ?? '',
        },
      });
      return {
        gameId: result.game_id,
        gameServerToken: result.game_server_token,
      };
    } catch (error) {
      throw error;
    }
  }, [api, currentUser]);

  return { createGame };
};
