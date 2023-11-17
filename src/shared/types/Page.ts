type Page =
  | 'root'
  | 'crossingHistory'
  | 'game'
  | 'profile'
  | 'signOut'
  | 'result';

export const Route = {
  root: '/',
  crossingHistory: 'crossing_history',
  game: 'game',
  profile: 'profile',
  signOut: 'sign_out',
  result: 'result',
} as const satisfies Record<Page, string>;
