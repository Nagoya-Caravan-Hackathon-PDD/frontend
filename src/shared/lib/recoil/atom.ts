import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';
import { CurrentUser } from '@/shared/types/CurrentUser';
import { GlobalConfig } from '@/shared/types/GlobalConfig';

const { persistAtom } = recoilPersist();

export const firebaseUserState = atom<CurrentUser>({
  key: 'firebaseUserState',
  default: { token: null },
  effects: [persistAtom],
});

export const globalState = atom<GlobalConfig>({
  key: 'globalState',
  default: { dark: false },
  effects: [persistAtom],
});
