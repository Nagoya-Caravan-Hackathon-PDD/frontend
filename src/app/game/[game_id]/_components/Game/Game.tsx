'use client';

import { ActionButton } from '../Button';
import { GitMonStatus } from '../GitMonStatus';
import { LogLikeCard } from '../LogLikeCard';
import { Center, Grid, Stack } from '@/shared/components/common/Layout';

export const Game = () => {
  return (
    <Center>
      <Stack>
        <LogLikeCard
          messages={[
            {
              message: '2023-11-18 06:51:48 [INFO] you = "-0"',
              variant: 'message',
            },
            {
              message: '"Ownership"',
              variant: 'done',
            },
            {
              message: '2023-11-18 06:52:14 [INFO] enemy = "-330"',
              variant: 'message',
            },
            {
              message: 'Waiting for enemy command...',
              variant: 'waiting',
            },
          ]}
        />
        <Stack gap={50}>
          <GitMonStatus
            show={'enemy'}
            gitMon={{
              id: 2,
              level: 20,
              name: 'Gopher',
              hp: 310,
              maxHp: 1000,
            }}
          />
          <GitMonStatus
            show={'current'}
            gitMon={{
              id: 1,
              level: 34,
              name: 'Ferris',
              hp: 800,
              maxHp: 800,
            }}
          />
        </Stack>
        <Grid>
          <Grid.Col span={6}>
            <ActionButton type={'attack'} text={'Attack'} onClick={() => {}} />
          </Grid.Col>
          <Grid.Col span={6}>
            <ActionButton
              type={'defense'}
              text={'Defense'}
              onClick={() => {}}
            />
          </Grid.Col>
        </Grid>
        <ActionButton type={'skill'} text={'Ownership'} onClick={() => {}} />
        <ActionButton type={'skill'} text={'panic!()'} onClick={() => {}} />
        <ActionButton type={'skill'} text={'Bounds'} onClick={() => {}} />
      </Stack>
    </Center>
  );
};
