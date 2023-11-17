import useSWR from 'swr';
import { useApiClient } from '@/shared/lib/axios';

export const useGetUser = (githubId: string) => {
  const { api } = useApiClient();
  return useSWR(
    api?.v1.users._user_id(githubId).$path(),
    () => api?.v1.users._user_id(githubId).$get(),
  );
};
