import { createTheme } from '@mantine/core';
import { githubColorTheme } from '../colors';
import { Card } from '@/shared/components/common/Layout';

export const theme = createTheme({
  primaryColor: 'green',
  colors: githubColorTheme,
  defaultRadius: 'md',

  components: {
    Card: Card.extend({
      defaultProps: {
        withBorder: true,
        shadow: 'sm',
      },
    }),
  },
});
