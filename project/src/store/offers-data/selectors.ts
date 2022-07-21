import {NameSpace} from '../../const';
import {State} from '../../types/state';
import {Offer} from '../../types/offers';

export const getSortedOffers = (state: State): Offer[] => state[NameSpace.offers].sortedOffers;

export const getOfferDetails = (state: State): Offer | null => state[NameSpace.offers].offerDetails;

export const getNearOffers = (state: State): Offer[] => state[NameSpace.offers].nearOffers;

export const getLoadedOffersDataStatus = (state: State): boolean => state[NameSpace.offers].isOffersDataLoaded;

export const getLoadedOfferDetailsDataStatus = (state: State): boolean => state[NameSpace.offers].isOfferDetailsDataLoaded;

export const getLoadedNearOffersDataStatus = (state: State): boolean => state[NameSpace.offers].isNearOffersDataLoaded;

export const getCity = (state: State): string => state[NameSpace.offers].city;

export const getSortType = (state: State): string => state[NameSpace.offers].sortType;
