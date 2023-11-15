'use client';

import {
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import { useRecoilState } from 'recoil';
import { signIn, signOut } from '@/shared/lib/firebase';
import { firebaseUserState } from '@/shared/lib/recoil/atom';
import { CurrentUser } from '@/shared/types/CurrentUser';

type AuthContextValue = {
  currentUser?: CurrentUser;
  login?: () => Promise<void>;
  logout?: () => Promise<void>;
};
const AuthContext = createContext<AuthContextValue>({});

type Props = {
  children: ReactNode;
};
export const AuthProvider = ({ children }: Props) => {
  const [currentUser, setCurrentUser] = useState<CurrentUser | undefined>(
    undefined,
  );
  const [firebaseUser, setFirebaseUser] = useRecoilState(firebaseUserState);

  const login = useCallback(async () => {
    try {
      const user = await signIn();
      const currentUser: CurrentUser = {
        token: user.token ?? null,
        uid: user.uid,
        userName: user.displayName ?? undefined,
        userIcon: user.photoURL ?? undefined,
      };
      setCurrentUser(currentUser);
      setFirebaseUser(currentUser);
    } catch (error) {
      throw error;
    }
  }, [setFirebaseUser]);

  const logout = useCallback(async () => {
    try {
      await signOut();
      setCurrentUser({ token: null });
      setFirebaseUser({ token: null });
    } catch (error) {
      throw error;
    }
  }, [setFirebaseUser]);

  useEffect(() => {
    setCurrentUser(firebaseUser);
  }, [firebaseUser]);

  return (
    <AuthContext.Provider value={{ currentUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
