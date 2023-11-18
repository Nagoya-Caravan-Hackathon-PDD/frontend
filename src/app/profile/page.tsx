'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { useAuth } from '@/shared/components/hooks/auth';
import { Route } from '@/shared/types/Page';

const Page = () => {
  const { currentUser } = useAuth();
  const router = useRouter();
  useEffect(() => {
    if (currentUser) {
      router.push(`${Route.profile}/${currentUser.uid}`);
    }
  }, [currentUser, router]);
  return <></>;
};
export default Page;
