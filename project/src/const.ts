import {Classes} from './types/classes';

export const MAX_RATING = 5;

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

export const OFFER_FEATURES = [
  {
    entire: 'entire',
    key: 1,
  },
  'entire', 'bedrooms', 'adults',
];

export enum UrlMarkers {
  Default = 'img/pin.svg',
  Current = 'img/pin-active.svg'
}

export enum Placement {
  City = 'citiesPlaces',
  Near = 'nearPlaces'
}

export const OffersListClasses: Classes = {
  listClass: {
    [Placement.City]: 'cities__places-list tabs__content',
    [Placement.Near]: 'near-places__list',
  },
  placeCard: {
    [Placement.City]: 'cities__place-card',
    [Placement.Near]: 'near-places__card',
  },
  imageWrapper: {
    [Placement.City]: 'cities__image-wrapper',
    [Placement.Near]: 'near-places__image-wrapper',
  },
};
