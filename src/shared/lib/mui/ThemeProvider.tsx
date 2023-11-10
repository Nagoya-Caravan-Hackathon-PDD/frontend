import { ThemeProvider as MuiThemeProvider, Theme } from '@mui/material';
import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  theme: Theme;
};
export const ThemeProvider = ({ children, theme }: Props) => {
  return <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>;
};
