import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';
import { CurrentUser } from '@/shared/types/CurrentUser';

const { persistAtom } = recoilPersist();

export const firebaseUserState = atom<CurrentUser>({
  key: 'firebaseAuth',
  default: { token: null },
  effects: [persistAtom],
});
