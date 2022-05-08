import {Classes} from './types/classes';

export const MAX_RATING = 5;

export const CITIES = ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'];

export const SORT_OPTIONS = ['Popular', 'Price: low to high', 'Price: high to low', 'Top rated first'];

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

