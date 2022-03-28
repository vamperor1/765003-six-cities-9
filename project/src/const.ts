export enum AppRoute {
  Root = '/',
  SignIn = '/login',
  Favorites = '/favorites',
  Room = '/offer/:id'
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN'
}

export const REVIEWS_RATING = [
  {
    star: '5',
    title: 'perfect',
  },
  {
    star: '4',
    title: 'good',
  },
  {
    star: '3',
    title: 'not bad',
  },
  {
    star: '2',
    title: 'badly',
  },
  {
    star: '1',
    title: 'terribly',
  },
];
