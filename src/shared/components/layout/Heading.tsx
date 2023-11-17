import { ReactNode } from 'react';
import { Box, Stack } from '../common/Layout';
import { Title } from '../common/Text';

type Props = {
  title: string;
  children: ReactNode;
};
export const Heading = ({ title, children }: Props) => {
  return (
    <Stack gap={20}>
      <Title order={2}>{title}</Title>
      <Box>{children}</Box>
    </Stack>
  );
};
