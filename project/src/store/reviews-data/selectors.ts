import {NameSpace} from '../../const';
import {State} from '../../types/state';
import {Review} from '../../types/reviews';

export const getReviews = (state: State): Review[] => state[NameSpace.reviews].reviews;

export const getLoadedReviewsData = (state: State): boolean => state[NameSpace.reviews].isReviewsDataLoaded;
