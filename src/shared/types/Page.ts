type Page = 'root' | 'signOut';

export const Route = {
  root: '/',
  signOut: 'sign_out/',
} as const satisfies Record<Page, string>;
