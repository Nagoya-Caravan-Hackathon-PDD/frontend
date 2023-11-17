import { Button } from '@/shared/components/common/Button';
import { Stack } from '@/shared/components/common/Layout';
import { Route } from '@/shared/types/Page';

export const Game = () => {
  return (
    <Stack>
      <Button component="a" href={Route.createGameRoom}>
        {'Create a game'}
      </Button>
      <Button component="a" href={Route.joinGameRoom}>
        {'Join the game'}
      </Button>
    </Stack>
  );
};
