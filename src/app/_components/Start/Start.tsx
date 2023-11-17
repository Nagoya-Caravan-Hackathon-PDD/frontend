'use client';

import { Stack } from '@mantine/core';
import { UserCard } from './UserCard';
import { Center } from '@/shared/components/common/Layout';
import { Title } from '@/shared/components/common/Text';
import { useAuth } from '@/shared/components/hooks/auth';

export const Start = () => {
  const { currentUser } = useAuth();
  return (
    <Stack>
      <Center>
        <Title order={1}>GitHub Monster</Title>
      </Center>
      <Center>{currentUser && <UserCard currentUser={currentUser} />}</Center>
    </Stack>
  );
};
