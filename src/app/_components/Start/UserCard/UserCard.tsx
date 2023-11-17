import { useState } from 'react';
import { SelectGitMonModal } from './SelectGitMonModal/SelectGitMonModal';
import { StartGameForm } from './StartGameForm';
import { GithubIcon } from '@/shared/components/Icons';
import { Button } from '@/shared/components/common/Button';
import { Card, Center, Flex, Stack } from '@/shared/components/common/Layout';
import { Text } from '@/shared/components/common/Text';
import { GitMonIcon } from '@/shared/components/features/GitMon/GitMonIcon';
import { LoginButton } from '@/shared/components/features/LoginButton';
import { useDisclosure } from '@/shared/components/hooks/useDisclosure';
import { CurrentUser } from '@/shared/types/CurrentUser';

type Props = {
  currentUser: CurrentUser;
};
export const UserCard = ({ currentUser }: Props) => {
  const [gitMonId, setGitMonId] = useState<number | null>(null);
  const { isOpen, open, close } = useDisclosure();

  return (
    <Card p="xl">
      <Stack gap="lg">
        <Card.Section>
          <Center p="md">
            {currentUser.token === null ? (
              <GithubIcon width={300} height={300} />
            ) : (
              <Button
                variant="outline"
                w={300}
                h={300}
                radius="md"
                onClick={open}
              >
                {gitMonId ? (
                  <GitMonIcon index={gitMonId} />
                ) : (
                  <Flex direction="column">
                    <GithubIcon width="100%" height="100%" />
                    <Text size="lg">Tap!</Text>
                  </Flex>
                )}
              </Button>
            )}
          </Center>
        </Card.Section>
        <Card.Section>
          <Stack>
            {currentUser.token === null ? <LoginButton /> : <StartGameForm />}
          </Stack>
        </Card.Section>
      </Stack>
      <SelectGitMonModal
        isOpen={isOpen}
        onClose={close}
        gitMonId={gitMonId}
        onChange={setGitMonId}
      />
    </Card>
  );
};
