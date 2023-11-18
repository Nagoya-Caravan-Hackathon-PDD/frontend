'use client';

import { useGitHubUser } from './hooks';
import { Button } from '@/shared/components/common/Button';
import { Image } from '@/shared/components/common/Image';
import { Card, Center, Stack } from '@/shared/components/common/Layout';

type Props = {
  githubId: string;
};
export const Profile = ({ githubId }: Props) => {
  const { data } = useGitHubUser(githubId);
  return (
    <Center>
      <>
        {data && (
          <Card>
            <Stack>
              <Image src={data.avatar_url} alt={`${githubId} icon`} />
              <Button component="a">{`Visit ${githubId}`}</Button>
            </Stack>
          </Card>
        )}
      </>
    </Center>
  );
};
