'use client';

import { useMantineColorScheme } from '@mantine/core';
import { ReactNode, useCallback } from 'react';
import { useRecoilState } from 'recoil';
import { GithubIcon, MoonIcon, SunIcon } from '../../Icons';
import { Button } from '../../common/Button';
import { AppShell, Group } from '../../common/Layout';
import { Text } from '../../common/Text';
import { useAuth } from '../../hooks/auth';
import { globalState } from '@/shared/lib/recoil/atom';

type Props = {
  children?: ReactNode;
};
export const GlobalNavigation = ({ children }: Props) => {
  const { currentUser } = useAuth();

  const [globalConfig, setGlobalConfig] = useRecoilState(globalState);
  const { colorScheme, setColorScheme } = useMantineColorScheme();

  const handleSwitchColorScheme = useCallback(
    (cs: 'light' | 'dark') => {
      setGlobalConfig({ ...globalConfig, dark: cs === 'dark' ? true : false });
      setColorScheme(cs);
    },
    [globalConfig, setColorScheme, setGlobalConfig],
  );

  return (
    <AppShell header={{ height: 60 }} padding="md">
      <AppShell.Header>
        <Group h="100%" px="md">
          <Group justify="space-between" style={{ flex: 1 }}>
            <Group>
              <GithubIcon />
            </Group>
            <Group ml="xl" gap="sm">
              {currentUser?.userName && <Text>{currentUser.userName}</Text>}
              {colorScheme === 'dark' ? (
                <Button
                  c="gray"
                  variant="transparent"
                  onClick={() => handleSwitchColorScheme('light')}
                >
                  <SunIcon />
                </Button>
              ) : (
                <Button
                  c="gray"
                  variant="transparent"
                  onClick={() => handleSwitchColorScheme('dark')}
                >
                  <MoonIcon />
                </Button>
              )}
            </Group>
          </Group>
        </Group>
      </AppShell.Header>

      <AppShell.Main>{children}</AppShell.Main>
    </AppShell>
  );
};
