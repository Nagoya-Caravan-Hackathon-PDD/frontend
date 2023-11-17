import { Button, Stack } from '@mantine/core';

import { QRCard } from '@/shared/components/features/QRCard/QRCard';
import { Heading } from '@/shared/components/layout';
import { Route } from '@/shared/types/Page';

export const CreateGame = () => {
  // NOTE: サーバーからIDを受け取る
  const id = '1234567890';
  const url = process.env.NEXT_PUBLIC_BASE_URL + '/' + Route.game + '/' + id;
  const isReady = false;
  return (
    <Heading title="Real time battle">
      <Stack>
        <QRCard url={url} />
        <Button>Ready to go</Button>
      </Stack>
    </Heading>
  );
};
