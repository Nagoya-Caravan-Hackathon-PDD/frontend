import { collection, onSnapshot } from 'firebase/firestore';
import { useEffect, useMemo, useState } from 'react';
import { statusConverter } from './converter';
import { db } from '@/shared/lib/firebase';
import { Status } from '@/shared/types/entities/Status';

export const useGetStatuses = (gameId: string) => {
  const [statuses, setStatuses] = useState<Status[]>([]);
  const ref = useMemo(
    () =>
      collection(db, `games/${gameId}/statuses`).withConverter(statusConverter),
    [gameId],
  );

  useEffect(() => {
    return onSnapshot(ref, (snapshot) => {
      setStatuses(snapshot.docs.map((doc) => doc.data()));
    });
  }, [ref]);

  return { data: statuses } as const;
};
