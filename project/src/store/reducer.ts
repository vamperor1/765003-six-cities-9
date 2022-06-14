import {createReducer} from '@reduxjs/toolkit';
import {changeCity, getOffers, changeSorting, loadOffers, requireAuthorization, setError} from './action';
import {getOffersByCity, sortOffers} from '../offers';
import {InitialState} from '../types/state';
import {AuthorizationStatus} from '../const';

const initialState: InitialState = {
  city: 'Paris',
  offers: [],
  offersByCity: [],
  sortedOffers: [],
  sortType: 'Popular',
  isDataLoaded: false,
  authorizationStatus: AuthorizationStatus.Unknown,
  error: '',
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(loadOffers, (state, action) => {
      state.offers = action.payload;
      state.isDataLoaded = true;
    })
    .addCase(changeCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(getOffers, (state) => {
      state.offersByCity = getOffersByCity(state.city, state.offers);
      state.sortedOffers = sortOffers(state.sortType, state.offersByCity);
    })
    .addCase(changeSorting, (state, action) => {
      state.sortType = action.payload;
      state.sortedOffers = sortOffers(state.sortType, state.offersByCity);
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    });
});

export {reducer};
