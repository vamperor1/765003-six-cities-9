import {store} from '../store/index';
import {Offer} from './offers';
import {Review} from './reviews';
import {AuthorizationStatus} from '../const';

export type UserProcess = {
  authorizationStatus: AuthorizationStatus,
  isAuthorizationComplete: boolean
};

export type OffersData = {
  offers: Offer[],
  city: string,
  sortType: string,
  offersByCity: Offer[],
  sortedOffers: Offer[],
  nearOffers: Offer[],
  isOffersDataLoaded: boolean,
  offerDetails: Offer | null,
  isOfferDetailsDataLoaded: boolean,
  isNearOffersDataLoaded: boolean,
}

export type ReviewsData = {
  reviews: Review[],
  isReviewsDataLoaded: boolean,
}

export type FavoritesData = {
  favorites: Offer[],
  isFavoritesDataLoaded: boolean,
}

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
