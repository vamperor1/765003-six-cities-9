import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {NameSpace, SortOptions} from '../../const';
import {OffersData} from '../../types/state';
import {getOffersByCity, sortOffers} from '../../offers';
import {ResetOffersAction} from '../../types/action';


/*
Этот слайс мне кажется немного перегруженным служебными экшенами
в виде сортировки, фильтрации и флагов.
Но, так как доступ к стейту слайса из другого слайса не предусмотрен
стандартными инструментами (только обходные пути, например, самописное middleware),
пришлось оставить в таком виде.
*/

const initialState: OffersData = {
  city: 'Paris',
  sortType: SortOptions.POPULAR,
  offers: [],
  offersByCity: [],
  sortedOffers: [],
  offerDetails: null,
  nearOffers: [],
  isOffersDataLoaded: false,
  isOfferDetailsDataLoaded: false,
  isNearOffersDataLoaded: false,
};

export const offersData = createSlice({
  name: NameSpace.offers,
  initialState,
  reducers: {
    loadOffers: (state, action) => {
      state.offers = action.payload;
      state.isOffersDataLoaded = true;
    },
    loadOfferDetails: (state, action) => {
      state.offerDetails = action.payload;
      state.isOfferDetailsDataLoaded = true;
    },
    loadNearOffers: (state, action) => {
      state.nearOffers = action.payload;
      state.isNearOffersDataLoaded = true;
    },
    getOffers: (state) => {
      state.offersByCity = getOffersByCity(state.city, state.offers);
      state.sortedOffers = sortOffers(state.sortType, state.offersByCity);
    },
    changeCity: (state, action) => {
      state.city = action.payload;
    },
    changeSorting: (state, action) => {
      state.sortType = action.payload;
      state.sortedOffers = sortOffers(state.sortType, state.offersByCity);
    },
    resetDataLoadingFlag: (state, action: PayloadAction<ResetOffersAction>) => {
      const dataTypeFlag = action.payload;
      state[dataTypeFlag] = false;
    },
  },
});

export const {loadOffers, loadOfferDetails, loadNearOffers, getOffers, changeCity, changeSorting, resetDataLoadingFlag} = offersData.actions;
