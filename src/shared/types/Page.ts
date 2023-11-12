type Page = 'root' | 'signIn' | 'signOut';

export const Route = {
  root: '/',
  signIn: 'sign_in/',
  signOut: 'sign_out/',
} as const satisfies Record<Page, string>;
