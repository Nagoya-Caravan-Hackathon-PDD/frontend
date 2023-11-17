import { Title } from '../../common/Text';
import { Image } from '@/shared/components/common/Image';
import { Card, Center, Stack } from '@/shared/components/common/Layout';

type Props = {
  gitMonPhoto: string;
  gitMonName: string;
};
export const ProfileCard = ({ gitMonPhoto, gitMonName }: Props) => {
  return (
    <Card p="xl">
      <Stack>
        <Center>
          <Image src={gitMonPhoto} alt="Your GitMon" radius="md" />
        </Center>
        <Center>
          <Title order={4}>{gitMonName}</Title>
        </Center>
      </Stack>
    </Card>
  );
};
