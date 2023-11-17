import { DoorEnterIcon, UsersIcon } from '@/shared/components/Icons';
import { Button } from '@/shared/components/common/Button';
import { Stack } from '@/shared/components/common/Layout';
import { Route } from '@/shared/types/Page';

export const Game = () => {
  return (
    <Stack>
      <Button
        component="a"
        href={Route.createGameRoom}
        leftSection={<UsersIcon />}
      >
        {'Create a game'}
      </Button>
      <Button
        component="a"
        href={Route.joinGameRoom}
        leftSection={<DoorEnterIcon />}
      >
        {'Join the game'}
      </Button>
    </Stack>
  );
};
