import {createAction} from '@reduxjs/toolkit';
import {Offer} from '../types/offers';

export const changeCity = createAction<string>('changeCity');

export const getOffers = createAction('getOffers');

export const changeSorting = createAction<string>('changeSorting');

export const loadOffers = createAction<Offer[]>('loadOffers');
