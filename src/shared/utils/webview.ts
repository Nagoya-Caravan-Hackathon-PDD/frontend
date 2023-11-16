import { z } from 'zod';
import { CurrentUser } from '@/shared/types/CurrentUser';

const UserFromWebview = z.object({
  token: z.string(),
  uid: z.string(),
  userName: z.string().nullable(),
  userIcon: z.string().nullable(),
});

export const parseCurrentUser = (message: WebviewMessage): CurrentUser => {
  const user = UserFromWebview.parse(JSON.parse(message));
  return {
    token: user.token,
    uid: user.uid,
    userName: user.userName ?? undefined,
    userIcon: user.userIcon ?? undefined,
  };
};
