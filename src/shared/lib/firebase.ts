import { initializeApp } from 'firebase/app';
import {
  GithubAuthProvider,
  User,
  signOut as firebaseSignIn,
  getAuth,
  signInWithPopup,
} from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const app = initializeApp({
  apiKey: process.env.NEXT_PUBLIC_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_MEASUREMENT_ID,
});

const auth = getAuth(app);

export const db = getFirestore(app);

export const signIn = async (): Promise<User & { accessToken?: string }> => {
  const provider = new GithubAuthProvider();
  try {
    const result = await signInWithPopup(auth, provider);
    return result.user;
  } catch (error) {
    throw error;
  }
};

export const signOut = async () => {
  try {
    return await firebaseSignIn(auth);
  } catch (error) {
    throw error;
  }
};
