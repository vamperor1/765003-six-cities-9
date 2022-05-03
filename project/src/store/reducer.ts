import {createReducer} from '@reduxjs/toolkit';
import {changeCity, getOffers} from './action';
import {getOffersByCity} from '../offers';
import {InitialState} from '../types/state';

const initialState: InitialState = {
  city: 'Paris',
  offers: [],
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(getOffers, (state, action) => {
      const {city, offers} = action.payload;
      state.offers = getOffersByCity(city, offers);
    });
});

export {reducer};
