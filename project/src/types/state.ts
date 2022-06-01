import {store} from '../store/index.js';
import {Offer} from './offers.js';

export type InitialState = {
  city: string,
  offers: Offer[],
  offersByCity: Offer[],
  sortedOffers: Offer[],
  sortType: string,
  isDataLoaded: boolean
}

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
