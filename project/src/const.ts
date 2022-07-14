import {Classes} from './types/classes';

export const MAX_RATING = 5;

export const MAX_REVIEWS_COUNT = 10;

export const MAX_IMAGES_COUNT = 6;

export const CITIES = ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'];

export const BACKEND_URL = 'https://9.react.pages.academy/six-cities';

export const AUTH_TOKEN_KEY_NAME = 'six-cities-token';

export const REQUEST_TIMEOUT = 5000;

export const SortOptions = {
  POPULAR: 'Popular',
  LOW_PRICE_FIRST: 'Price: low to high',
  HIGH_PRICE_FIRST: 'Price: high to low',
  TOP_RATED_FIRST: 'Top rated first',
} as const;

export enum ReviewLength {
  Min = 50,
  Max = 300
}

export enum AppRoute {
  Root = '/',
  SignIn = '/login',
  Favorites = '/favorites',
  Room = '/offer/:id',
  Other = '*',
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

export enum UrlMarkers {
  Default = 'img/pin.svg',
  Current = 'img/pin-active.svg'
}

export enum Placement {
  City = 'citiesPlaces',
  Near = 'nearPlaces',
  Favorites= 'favorites'
}

export const PlaceCardClasses: Classes = {
  listClass: {
    [Placement.City]: 'cities__places-list tabs__content',
    [Placement.Near]: 'near-places__list',
    [Placement.Favorites]: '',
  },
  placeCard: {
    [Placement.City]: 'cities__place-card',
    [Placement.Near]: 'near-places__card',
    [Placement.Favorites]: 'favorites__card',
  },
  imageWrapper: {
    [Placement.City]: 'cities__image-wrapper',
    [Placement.Near]: 'near-places__image-wrapper',
    [Placement.Favorites]: 'favorites__image-wrapper',
  },
  placeCardInfo: {
    [Placement.City]: '',
    [Placement.Near]: '',
    [Placement.Favorites]: 'favorites__card-info',
  },
  imgWidth: {
    [Placement.City]: '260',
    [Placement.Near]: '260',
    [Placement.Favorites]: '150',
  },
  imgHeight: {
    [Placement.City]: '200',
    [Placement.Near]: '200',
    [Placement.Favorites]: '110',
  },
};

export enum APIRoute {
  Offers = '/hotels',
  Favorite = '/favorite',
  Comments = '/comments',
  Login = '/login',
  Logout = '/logout'
}

export enum HTTP_CODE {
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  NOT_FOUND = 404,
}

export enum NameSpace {
  offers = 'OFFERS',
  reviews = 'REVIEWS',
  user = 'USER',
}
