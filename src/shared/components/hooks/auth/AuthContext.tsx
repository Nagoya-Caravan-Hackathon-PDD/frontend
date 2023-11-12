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
  currentUser: CurrentUser;
  login?: () => Promise<void>;
  logout?: () => Promise<void>;
};
export const AuthContext = createContext<AuthContextValue>({ currentUser: {} });

type Props = {
  children: ReactNode;
};
export const AuthProvider = ({ children }: Props) => {
  const [currentUser, setCurrentUser] = useState<CurrentUser>({});
  const [firebaseUser, setFirebaseUser] = useRecoilState(firebaseUserState);

  const login = useCallback(async () => {
    try {
      const user = await signIn();
      const currentUser: CurrentUser = {
        token: user.token,
        uid: user.uid,
        userName: undefined,
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
      setCurrentUser({});
      setFirebaseUser({});
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
