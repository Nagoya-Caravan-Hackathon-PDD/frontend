import { useState } from 'react';
import { SelectGitMonModal } from './SelectGitMonModal/SelectGitMonModal';
import { StartGameForm } from './StartGameForm';
import { GithubIcon } from '@/shared/components/Icons';
import { Button } from '@/shared/components/common/Button';
import { Image } from '@/shared/components/common/Image';
import { Card, Center, Stack } from '@/shared/components/common/Layout';
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
    <Card p={'xl'}>
      <Stack gap="lg">
        <Card.Section>
          <Center p={'md'}>
            {currentUser.token === null ? (
              <GithubIcon width="100%" height="100%" />
            ) : (
              <Button
                variant="transparent"
                w={300}
                h={300}
                radius="md"
                onClick={open}
              >
                {gitMonId ? (
                  <Image alt="" radius="md" />
                ) : (
                  <GithubIcon width="100%" height="100%" />
                )}
              </Button>
            )}
          </Center>
        </Card.Section>
        <Stack>
          {currentUser.token === null ? <LoginButton /> : <StartGameForm />}
        </Stack>
      </Stack>
      <SelectGitMonModal
        isOpen={isOpen}
        onClose={close}
        gitMonId={gitMonId}
        gitMons={[]}
        onChange={setGitMonId}
      />
    </Card>
  );
};
