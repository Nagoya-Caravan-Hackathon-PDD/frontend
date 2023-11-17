import { useMediaQuery as MantineMediaQuery } from '@mantine/hooks';

export const useMediaQuery = (query: string) => {
  const matches = MantineMediaQuery(query);
  return matches;
};
