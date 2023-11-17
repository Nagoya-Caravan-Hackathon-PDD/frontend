'use client';
import { Button, Stack } from '@mantine/core';

import { useState } from 'react';
import { QRCard } from '@/shared/components/features/QRCard/QRCard';
import { Heading } from '@/shared/components/layout';
import { theme } from '@/shared/lib/mantine/theme';
import { Route } from '@/shared/types/Page';

export const CreateGame = () => {
  // TODO: サーバーからIDを受け取る
  const id = '1234567890';
  const url = process.env.NEXT_PUBLIC_BASE_URL + '/' + Route.game + '/' + id;
  const [isReady, setIsReady] = useState(false);
  const handleClickReady = () => {
    if (isReady) {
      // TODO: サーバーに準備完了を伝える
    } else {
      // TODO: サーバーに未準備完了を伝える
    }
    setIsReady((prev) => !prev);
  };

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
