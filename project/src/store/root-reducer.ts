import {combineReducers} from '@reduxjs/toolkit';
import {NameSpace} from '../const';
import {offersData} from './offers-data/offers-data';
import {reviewsData} from './reviews-data/reviewsData';
import {userProcess} from './user-process/user-process';

export const rootReducer = combineReducers({
  [NameSpace.offers]: offersData.reducer,
  [NameSpace.reviews]: reviewsData.reducer,
  [NameSpace.user]: userProcess.reducer,
});
