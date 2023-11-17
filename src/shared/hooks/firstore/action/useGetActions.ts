import { collection, onSnapshot } from 'firebase/firestore';
import { useEffect, useMemo, useState } from 'react';
import { actionConverter } from './converter';
import { db } from '@/shared/lib/firebase';
import { Action } from '@/shared/types/entities/Action';

// TODO: firebaseのドキュメント構造に従って変更する
export const useGetActions = (gameId: string) => {
  const [turn, setTurn] = useState<number>(1);
  const [actions, setActions] = useState<Action[]>([]);

  const ref = useMemo(
    () =>
      collection(db, `games/${gameId}/log/action/${turn}`).withConverter(
        actionConverter,
      ),
    [gameId, turn],
  );

  useEffect(() => {
    return onSnapshot(ref, (snapshot) => {
      setActions((prev) => [
        ...prev,
        ...snapshot.docs.map((doc) => doc.data()),
      ]);
    });
  }, [ref]);

  const nextTurn = () => setTurn((prev) => prev + 1);

  return { data: actions, nextTurn } as const;
};
