import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {NameSpace} from '../../const';
import {FavoritesData} from '../../types/state';
import {deleteFavorite} from '../../favorites';
import {ResetFavoritesAction} from '../../types/action';
import {Offer} from '../../types/offers';

const initialState: FavoritesData = {
  favorites: [],
  isFavoritesDataLoaded: false,
};

export const favoritesData = createSlice({
  name: NameSpace.favorites,
  initialState,
  reducers: {
    loadFavorites: (state, action) => {
      state.favorites = action.payload;
      state.isFavoritesDataLoaded = true;
    },
    removeFavorite: (state, action: PayloadAction<Offer>) => {
      state.favorites = deleteFavorite(state.favorites, action.payload);
    },
    resetDataLoadingFlag: (state, action: PayloadAction<ResetFavoritesAction>) => {
      const dataTypeFlag = action.payload;
      state[dataTypeFlag] = false;
    },
  },
});

export const {loadFavorites, removeFavorite, resetDataLoadingFlag} = favoritesData.actions;
