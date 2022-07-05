import {store} from '../store/index';
import {Offer} from './offers';
import {Review} from './reviews';

export type InitialState = {
  city: string,
  offers: Offer[],
  offerDetails: Offer | null,
  offersByCity: Offer[],
  sortedOffers: Offer[],
  nearOffers: Offer[],
  reviews: Review[],
  sortType: string,
  isOffersDataLoaded: boolean,
  isOfferDetailsDataLoaded: boolean,
  isNearOffersDataLoaded: boolean,
  isReviewsDataLoaded: boolean,
  authorizationStatus: string,
  error: string,
}

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
