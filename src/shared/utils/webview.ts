import { z } from 'zod';
import { CurrentUser } from '@/shared/types/CurrentUser';

const UserFromWebview = z.object({
  token: z.string().nullable(),
  uid: z.string().optional(),
  displayName: z.string().optional(),
  photoURL: z.string().optional(),
});

export const parseCurrentUser = (message: WebviewMessage): CurrentUser => {
  const user = UserFromWebview.parse(JSON.parse(message));
  return {
    token: user.token,
    uid: user.uid,
    userName: user.displayName,
    userIcon: user.photoURL,
  };
};
