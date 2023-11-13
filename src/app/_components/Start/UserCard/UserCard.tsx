import { StartGameButton } from './StartGameButton';
import { GithubIcon } from '@/shared/components/Icons';
import { Image } from '@/shared/components/common/Image';
import { Card, Center } from '@/shared/components/common/Layout';
import { Stack } from '@/shared/components/common/Layout/Stack';
import { Title } from '@/shared/components/common/Text';
import { LoginButton } from '@/shared/components/features/LoginButton';
import { CurrentUser } from '@/shared/types/CurrentUser';

type Props = {
  currentUser: CurrentUser;
};
export const UserCard = ({ currentUser }: Props) => {
  return (
    <Card withBorder shadow="sm" p={64}>
      <Stack gap={30}>
        <Card.Section>
          <Center>
            {currentUser.userIcon ? (
              <Image
                alt={currentUser.userName ?? 'icon'}
                src={currentUser.userIcon}
                radius={'100%'}
              />
            ) : (
              <GithubIcon height={400} width={400} />
            )}
          </Center>
        </Card.Section>
        <Stack>
          {currentUser.userName && (
            <Title order={4}>{currentUser.userName}</Title>
          )}
          {currentUser.token == null ? <LoginButton /> : <StartGameButton />}
        </Stack>
      </Stack>
    </Card>
  );
};
