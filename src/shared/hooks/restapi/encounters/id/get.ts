import useSWR from 'swr';
import { useApiClient } from '@/shared/lib/axios';

export const useGetEncounter = (encounterId: string) => {
  const { api } = useApiClient();
  return useSWR(
    api?.v1.encounters._encounter_id(encounterId).$path(),
    () => api?.v1.encounters._encounter_id(encounterId).$get(),
  );
};
