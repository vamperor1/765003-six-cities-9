import {createReducer} from '@reduxjs/toolkit';
import {changeCity, getOffers, changeSorting} from './action';
import {getOffersByCity} from '../offers';
import {InitialState} from '../types/state';

const initialState: InitialState = {
  city: 'Paris',
  offers: [],
  sortType: 'Popular',
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(getOffers, (state, action) => {
      const {city, offers} = action.payload;
      state.offers = getOffersByCity(city, offers);
    })
    .addCase(changeSorting, (state, action) => {
      state.sortType = action.payload;
    });
});

export {reducer};
