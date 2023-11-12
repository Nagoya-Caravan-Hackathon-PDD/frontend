import { createTheme } from '@mantine/core';
import { githubColorTheme } from '../colors';

export const theme = createTheme({
  primaryColor: 'green',
  colors: githubColorTheme,
  defaultRadius: 'md',
});
