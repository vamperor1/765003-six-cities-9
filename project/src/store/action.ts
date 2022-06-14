import {createAction} from '@reduxjs/toolkit';
import {Offer} from '../types/offers';
import {AuthorizationStatus} from '../const';

export const changeCity = createAction<string>('changeCity');

export const getOffers = createAction('getOffers');

export const changeSorting = createAction<string>('changeSorting');

export const loadOffers = createAction<Offer[]>('loadOffers');

export const requireAuthorization = createAction<AuthorizationStatus>('requireAuthorization');

export const setError = createAction<string>('setError');
