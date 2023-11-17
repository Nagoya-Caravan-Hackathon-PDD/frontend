import { IconDoorEnter, IconUsers } from '@tabler/icons-react';
import { Button } from '@/shared/components/common/Button';
import { Stack } from '@/shared/components/common/Layout';
import { Route } from '@/shared/types/Page';

export const Game = () => {
  return (
    <Stack>
      <Button
        component="a"
        href={Route.createGameRoom}
        leftSection={<IconUsers />}
      >
        {'Create a game'}
      </Button>
      <Button
        component="a"
        href={Route.joinGameRoom}
        leftSection={<IconDoorEnter />}
      >
        {'Join the game'}
      </Button>
    </Stack>
  );
};
