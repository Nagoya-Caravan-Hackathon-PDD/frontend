'use client';

import { MantineProvider } from '@mantine/core';
import { ReactNode, useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { globalState } from '../recoil/atom';
import { theme } from './theme';

type Props = {
  children: ReactNode;
};
export const ThemeProvider = ({ children }: Props) => {
  const [globalConfig, _] = useRecoilState(globalState);
  const [colorScheme, setColorScheme] = useState<'dark' | 'light' | null>(null);

  useEffect(() => {
    setColorScheme(globalConfig.dark ? 'dark' : 'light');
  }, [globalConfig.dark]);

  if (colorScheme == null) {
    return <></>;
  }

  return <MantineProvider theme={theme}>{children}</MantineProvider>;
};
