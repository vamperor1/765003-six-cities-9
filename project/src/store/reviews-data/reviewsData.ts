import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {NameSpace} from '../../const';
import {ReviewsData} from '../../types/state';
import {sortReviews} from '../../offers';
import {ResetReviewsAction} from '../../types/action';

const initialState: ReviewsData = {
  reviews: [],
  isReviewsDataLoaded: false,
};

export const reviewsData = createSlice({
  name: NameSpace.reviews,
  initialState,
  reducers: {
    loadReviews: (state, action) => {
      state.reviews = sortReviews(action.payload);
      state.isReviewsDataLoaded = true;
    },
    resetDataLoadingFlag: (state, action: PayloadAction<ResetReviewsAction>) => {
      const dataTypeFlag = action.payload;
      state[dataTypeFlag] = false;
    },
  },
});

export const {loadReviews, resetDataLoadingFlag} = reviewsData.actions;
