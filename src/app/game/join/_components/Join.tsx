'use client';
import { useCallback, useState } from 'react';
import { JoinGameURLForm } from './JoinGameURLForm';
import { Button } from '@/shared/components/common/Button';
import { Stack } from '@/shared/components/common/Layout';
import { QRCodeReader } from '@/shared/components/features/QRCode/QRCodeReader';
import { useJoinGame } from '@/shared/hooks/restapi/game/id/post';
import { useReadyGame } from '@/shared/hooks/restapi/game/id/ready/post';
import { theme } from '@/shared/lib/mantine/theme';

export const Join = () => {
  const { joinGame } = useJoinGame();
  const [isReady, setIsReady] = useState(false);

  const [gameId, setGameId] = useState<string>();
  const [gameServerToken, setGameServerToken] = useState<string>();
  const { readyGame } = useReadyGame();

  const handleSubmit = async (url: string) => {
    const gameId = url.split('/').pop();
    if (!gameId) return;
    const result = await joinGame(gameId);
    setGameId(result?.gameId);
    setGameServerToken(result?.gameServerToken);
  };

  const handleClickReady = useCallback(async () => {
    if (!gameId || !gameServerToken) return;
    await readyGame(gameId);
    setIsReady(true);
  }, [gameId, gameServerToken, readyGame]);

  return (
    <Stack>
      <JoinGameURLForm onSubmit={handleSubmit} />
      <QRCodeReader />
      <Button
        color={isReady ? 'red' : theme.primaryColor}
        onClick={handleClickReady}
      >
        Ready to go
      </Button>
    </Stack>
  );
};
