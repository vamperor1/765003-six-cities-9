import {createAction} from '@reduxjs/toolkit';
import {Offer} from '../types/offers';
import {Review} from '../types/reviews';
import {ResetAction} from '../types/action';
import {AppRoute, AuthorizationStatus} from '../const';

export const changeCity = createAction<string>('changeCity');

export const getOffers = createAction('getOffers');

export const changeSorting = createAction<string>('changeSorting');

export const loadOffers = createAction<Offer[]>('loadOffers');

export const loadOfferDetails = createAction<Offer>('loadOfferDetails');

export const loadNearOffers = createAction<Offer[]>('loadNearOffers');

export const loadReviews = createAction<Review[]>('loadReviews');

export const requireAuthorization = createAction<AuthorizationStatus>('requireAuthorization');

export const resetDataLoadingFlag = createAction<ResetAction>('resetDataLoadingFlag');

export const redirectToRoute = createAction<AppRoute>('redirectToRoute');
