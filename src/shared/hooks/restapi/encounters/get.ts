import useSWR from 'swr';
import { useApiClient } from '@/shared/lib/axios';

export const useGetEncounters = (
  pageId: number,
  pageSize: number,
  githubId: string,
) => {
  const { api } = useApiClient();
  return useSWR(
    api?.encounters.$path(),
    () =>
      api?.encounters.$get({
        query: { pageID: pageId, pageSize: pageSize, userID: githubId },
      }),
  );
};
