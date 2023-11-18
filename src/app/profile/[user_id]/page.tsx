'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';
import { Profile } from './_components';
import { Guard } from '@/shared/components/features/Guard';
import { Heading } from '@/shared/components/layout';
import { useGetUser } from '@/shared/hooks/restapi/users';
import { Route } from '@/shared/types/Page';

const Page = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const userId = searchParams.get('user_id');
  const { data } = useGetUser(userId ?? '');

  useEffect(() => {
    if (!userId) {
      router.push(Route.root);
    }
  });

  return (
    <Guard>
      <Heading title={'Profile'}>
        {data?.github_id && <Profile githubId={data.github_id} />}
      </Heading>
    </Guard>
  );
};
export default Page;
