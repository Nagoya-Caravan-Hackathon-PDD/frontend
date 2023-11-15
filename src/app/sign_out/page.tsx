'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { useAuth } from '@/shared/components/hooks/auth';
import { Route } from '@/shared/types/Page';

const Page = () => {
  const { logout } = useAuth();
  const router = useRouter();

  useEffect(() => {
    (async () => {
      logout && (await logout());
      router.push(Route.root);
    })();
  }, [logout, router]);

  return <></>;
};
export default Page;
