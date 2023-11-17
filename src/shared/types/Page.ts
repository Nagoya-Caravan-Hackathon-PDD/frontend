type Page =
  | 'root'
  | 'crossingHistory'
  | 'game'
  | 'createGameRoom'
  | 'joinGameRoom'
  | 'profile'
  | 'signOut'
  | 'result';

export const Route = {
  root: '/',
  crossingHistory: 'crossing_history',
  game: 'game',
  createGameRoom: 'game/create',
  joinGameRoom: 'game/join',
  profile: 'profile',
  signOut: 'sign_out',
  result: 'result',
} as const satisfies Record<Page, string>;
