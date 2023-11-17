'use client';
import { Button, Stack } from '@mantine/core';

import { useCallback, useEffect, useMemo, useState } from 'react';
import { QRCard } from '@/shared/components/features/QRCard/QRCard';
import { Heading } from '@/shared/components/layout';
import { useReadyGame } from '@/shared/hooks/restapi/game/id/ready/post';
import { useCreateGame } from '@/shared/hooks/restapi/game/post';
import { theme } from '@/shared/lib/mantine/theme';
import { Route } from '@/shared/types/Page';

export const CreateGame = () => {
  // TODO: サーバーからIDを受け取る
  const { createGame } = useCreateGame();
  const { readyGame } = useReadyGame();
  const [gameId, setGameId] = useState<string>();
  const [gameServerToken, setGameServerToken] = useState<string>();
  const url = useMemo(
    () => process.env.NEXT_PUBLIC_BASE_URL + '/' + Route.game + '/' + gameId,
    [gameId],
  );

  const [isReady, setIsReady] = useState(false);

  const handleClickReady = useCallback(async () => {
    if (!gameId || !gameServerToken) return;
    await readyGame(gameId);
    setIsReady(true);
  }, [gameId, gameServerToken, readyGame]);

  useEffect(() => {
    (async () => {
      const result = await createGame();
      setGameId(result?.gameId);
      setGameServerToken(result?.gameServerToken);
    })();
  }, [createGame]);

  return (
    <Heading title="Real time battle">
      <Stack>
        <QRCard url={url} />
        <Button
          color={isReady ? 'red' : theme.primaryColor}
          onClick={handleClickReady}
        >
          Ready to go
        </Button>
      </Stack>
    </Heading>
  );
};
