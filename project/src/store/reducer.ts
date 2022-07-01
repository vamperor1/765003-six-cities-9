import {AuthorizationStatus} from '../const';
import {createReducer} from '@reduxjs/toolkit';
import {changeCity, getOffers, changeSorting, loadOffers, loadOfferDetails, loadNearOffers, loadReviews, resetDataLoadingFlag, requireAuthorization} from './action';
import {getOffersByCity, sortOffers, sortReviews} from '../offers';
import {InitialState} from '../types/state';

const initialState: InitialState = {
  city: 'Paris',
  offers: [],
  offerDetails: null,
  offersByCity: [],
  sortedOffers: [],
  nearOffers: [],
  reviews: [],
  sortType: 'Popular',
  isOffersDataLoaded: false,
  isOfferDetailsDataLoaded: false,
  isNearOffersDataLoaded: false,
  isReviewsDataLoaded: false,
  authorizationStatus: AuthorizationStatus.Unknown,
  error: '',
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(loadOffers, (state, action) => {
      state.offers = action.payload;
      state.isOffersDataLoaded = true;
    })
    .addCase(loadOfferDetails, (state, action) => {
      state.offerDetails = action.payload;
      state.isOfferDetailsDataLoaded = true;
    })
    .addCase(loadNearOffers, (state, action) => {
      state.nearOffers = action.payload;
      state.isNearOffersDataLoaded = true;
    })
    .addCase(loadReviews, (state, action) => {
      state.reviews = sortReviews(action.payload);
      state.isReviewsDataLoaded = true;
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
    .addCase(resetDataLoadingFlag, (state, action) => {
      const dataTypeFlag = action.payload;
      state[dataTypeFlag] = false;
    });
});

export {reducer};
