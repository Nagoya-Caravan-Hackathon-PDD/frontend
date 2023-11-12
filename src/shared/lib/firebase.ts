'use client';

import { initializeApp } from 'firebase/app';
import {
  GithubAuthProvider,
  signOut as firebaseSignIn,
  getAuth,
  signInWithPopup,
} from 'firebase/auth';

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

export const signIn = async () => {
  const provider = new GithubAuthProvider();
  try {
    const result = await signInWithPopup(auth, provider);
    const credential = GithubAuthProvider.credentialFromResult(result);
    const token = credential!.accessToken;
    return { token: token, ...result.user };
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
