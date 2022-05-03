import {createAction} from '@reduxjs/toolkit';
import {Offer} from '../types/offers';

export const changeCity = createAction<string>('changeCity');

export const getOffers = createAction<{offers: Offer[], city: string}>('getOffers');
