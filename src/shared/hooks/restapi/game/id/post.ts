import { useCallback } from 'react';
import { useAuth } from '@/shared/components/hooks/auth';
import { useApiClient } from '@/shared/lib/axios';

export const useJoinGame = () => {
  const { api } = useApiClient();
  const { currentUser } = useAuth();
  const joinGame = useCallback(
    async (gameId: string) => {
      if (!api) return;
      if (!currentUser) throw new Error('user is not logged in');

      try {
        // NOTE: backendの型が間違っている？
        const result = await api.v1.game._game_id(gameId).$post({
          body: {
            user_id: currentUser.uid,
            gameID: gameId,
          },
          headers: {
            Authorization: `Bearer ${currentUser.token}`,
          },
        });
        return {
          gameId: result.game_id,
          gameServerToken: result.game_server_token,
        };
      } catch (error) {
        throw error;
      }
    },
    [api, currentUser],
  );

  return { joinGame };
};
