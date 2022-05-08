import {store} from '../store/index.js';
import {Offer} from './offers.js';

export type InitialState = {
  city: string,
  offers: [] | Offer[],
  sortType: string
}

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;