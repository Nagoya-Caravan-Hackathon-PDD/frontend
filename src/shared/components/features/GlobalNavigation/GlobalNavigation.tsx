'use client';

import { useMantineColorScheme } from '@mantine/core';
import { useRouter } from 'next/navigation';
import { ReactNode, useCallback, useMemo } from 'react';
import { useRecoilState } from 'recoil';
import { GithubIcon, MoonIcon, SunIcon } from '../../Icons';
import { HistoryIcon } from '../../Icons/HistoryIcon';
import { SwordsIcon } from '../../Icons/SwordsIcon';
import { UserIcon } from '../../Icons/UserIcon';
import { Button } from '../../common/Button';
import { AppShell, Group } from '../../common/Layout';
import { Burger } from '../../common/Navigation/Burger';
import { Text } from '../../common/Text';
import { useAuth } from '../../hooks/auth';
import { useDisclosure } from '@/shared/components/hooks/useDisclosure';
import { globalState } from '@/shared/lib/recoil/atom';
import { Route } from '@/shared/types/Page';

type Props = {
  children?: ReactNode;
};

const NavigationItems = [
  {
    label: 'Real time battle',
    icon: SwordsIcon,
    path: Route.game,
  },
  {
    label: 'Crossing history',
    icon: HistoryIcon,
    path: Route.crossingHistory,
  },
  {
    label: 'Profile',
    icon: UserIcon,
    path: Route.profile,
  },
] as const;

export const GlobalNavigation = ({ children }: Props) => {
  const { currentUser } = useAuth();

  const [globalConfig, setGlobalConfig] = useRecoilState(globalState);
  const { colorScheme, setColorScheme } = useMantineColorScheme();
  const { isOpen, toggle, close } = useDisclosure();
  const router = useRouter();
  const isLoggedIn = useMemo(() => !!currentUser?.token, [currentUser]);

  const handleSwitchColorScheme = useCallback(
    (cs: 'light' | 'dark') => {
      setGlobalConfig({ ...globalConfig, dark: cs === 'dark' ? true : false });
      setColorScheme(cs);
    },
    [globalConfig, setColorScheme, setGlobalConfig],
  );

  const handleClickNavigationItem = useCallback(
    (path: string) => {
      router.push(path);
      close();
    },
    [router],
  );

  return (
    <AppShell
      header={{ height: 60 }}
      padding="md"
      navbar={{
        width: 300,
        breakpoint: 'sm',
        collapsed: { desktop: true, mobile: !isOpen },
      }}
    >
      <AppShell.Header>
        <Group h="100%" px="md">
          {isLoggedIn && (
            <Burger
              opened={isOpen}
              onClick={toggle}
              hiddenFrom="sm"
              size="sm"
            />
          )}

          <Group justify="space-between" style={{ flex: 1 }}>
            <Group>
              <GithubIcon />
            </Group>

            <Group ml="xl" gap="sm">
              {isLoggedIn && (
                <Group ml="xl" gap={0} visibleFrom="sm">
                  {NavigationItems.map((item) => (
                    <Button
                      leftSection={<item.icon />}
                      style={{ border: 'none' }}
                      justify="flex-start"
                      size="lg"
                      variant="transparent"
                      color={colorScheme === 'dark' ? 'gray' : 'black'}
                      key={item.label}
                      onClick={() => handleClickNavigationItem(item.path)}
                    >
                      {item.label}
                    </Button>
                  ))}
                </Group>
              )}
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

      {isLoggedIn && (
        <AppShell.Navbar py="md" px={4}>
          {NavigationItems.map((item) => (
            <Button
              leftSection={<item.icon />}
              style={{ border: 'none' }}
              justify="flex-start"
              size="lg"
              color={colorScheme === 'dark' ? 'gray' : 'black'}
              variant="transparent"
              key={item.label}
              onClick={() => handleClickNavigationItem(item.path)}
            >
              {item.label}
            </Button>
          ))}
        </AppShell.Navbar>
      )}

      <AppShell.Main>{children}</AppShell.Main>
    </AppShell>
  );
};
