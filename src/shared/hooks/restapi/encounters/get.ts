import useSWR from 'swr';
import { useApiClient } from '@/shared/lib/axios';

export const useGetEncounters = (
  pageId: number,
  pageSize: number,
  githubId: string,
) => {
  const { api } = useApiClient();
  return useSWR(
    api?.v1.encounters.$path(),
    () =>
      api?.v1.encounters.$get({
        query: { pageID: pageId, pageSize: pageSize, userID: githubId },
      }),
  );
};
