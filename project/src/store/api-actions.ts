import {createAsyncThunk} from '@reduxjs/toolkit';
import {AppDispatch, State} from '../types/state';
import {AxiosInstance} from 'axios';
import {Offer} from '../types/offers';
import {Review} from '../types/reviews';
import {APIRoute, AuthorizationStatus, AppRoute} from '../const';
import {redirectToRoute} from './action';
import {loadOffers, getOffers, resetDataLoadingFlag, loadOfferDetails, loadNearOffers} from './offers-data/offers-data';
import {resetDataLoadingFlag as resetReviewsLoadingFlag, loadReviews} from './reviews-data/reviewsData';
import {requireAuthorization} from './user-process/user-process';
import {saveToken, dropToken} from '../services/token';
import {AuthData} from '../types/auth-data';
import {UserData} from '../types/user-data';
import {ReviewData} from '../types/review';
import {errorHandle} from '../services/error-handle';

export const fetchOffersAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchOffers',
  async (_arg, {dispatch, extra: api}) => {
    try {
      const {data} = await api.get<Offer[]>(APIRoute.Offers);
      dispatch(loadOffers(data));
      dispatch(getOffers());
    } catch (error) {
      errorHandle(error);
    }
  },
);

export const fetchOfferDetailsAction = createAsyncThunk<void, string, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchOffers',
  async (id, {dispatch, extra: api}) => {
    try {
      dispatch(resetDataLoadingFlag('isOfferDetailsDataLoaded'));
      const {data} = await api.get<Offer>(`${APIRoute.Offers}/${id}`);
      dispatch(loadOfferDetails(data));
    } catch (error) {
      errorHandle(error);
    }
  },
);

export const fetchNearOffersAction = createAsyncThunk<void, string, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchOffers',
  async (id, {dispatch, extra: api}) => {
    try {
      dispatch(resetDataLoadingFlag('isNearOffersDataLoaded'));
      const {data} = await api.get<Offer[]>(`${APIRoute.Offers}/${id}/nearby`);
      dispatch(loadNearOffers(data));
    } catch (error) {
      errorHandle(error);
    }
  },
);

export const fetchReviewsAction = createAsyncThunk<void, string, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchOffers',
  async (id, {dispatch, extra: api}) => {
    try {
      dispatch(resetReviewsLoadingFlag('isReviewsDataLoaded'));
      const {data} = await api.get<Review[]>(`${APIRoute.Comments}/${id}`);
      dispatch(loadReviews(data));
    } catch (error) {
      errorHandle(error);
    }
  },
);

export const postReviewAction = createAsyncThunk<void, ReviewData, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'user/login',
  async ({id, comment, rating, resetForm, unblockForm}, {dispatch, extra: api}) => {
    try {
      const {data} = await api.post<Review[]>(`${APIRoute.Comments}/${id}`, {comment, rating});
      dispatch(loadReviews(data));
      resetForm();
      unblockForm();
    } catch(error) {
      errorHandle(error);
      unblockForm();
    }
  },
);

export const checkAuthAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'user/checkAuth',
  async (_arg, {dispatch, extra: api}) => {
    try {
      await api.get(APIRoute.Login);
      dispatch(requireAuthorization(AuthorizationStatus.Auth));
    } catch(error) {
      errorHandle(error);
      dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    }
  },
);

export const loginAction = createAsyncThunk<void, AuthData, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'user/login',
  async ({login: email, password}, {dispatch, extra: api}) => {
    try {
      const {data: {token}} = await api.post<UserData>(APIRoute.Login, {email, password});
      saveToken(token);
      dispatch(requireAuthorization(AuthorizationStatus.Auth));
      dispatch(redirectToRoute(AppRoute.Root));
    } catch(error) {
      errorHandle(error);
      dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    }
  },
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'user/logout',
  async (_arg, { dispatch, extra: api}) => {
    try {
      await api.delete(APIRoute.Logout);
      dropToken();
      dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    } catch (error) {
      errorHandle(error);
    }
  },
);
