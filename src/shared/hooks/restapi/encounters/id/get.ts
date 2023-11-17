import useSWR from 'swr';
import { useApiClient } from '@/shared/lib/axios';

export const useGetEncounter = (encounterId: string) => {
  const { api } = useApiClient();
  return useSWR(
    api?.encounters._encounter_id(encounterId).$path(),
    () => api?.encounters._encounter_id(encounterId).$get(),
  );
};
