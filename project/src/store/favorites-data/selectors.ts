import {NameSpace} from '../../const';
import {State} from '../../types/state';
import {Offer} from '../../types/offers';

export const getFavorites = (state: State): Offer[] => state[NameSpace.favorites].favorites;

export const getLoadedFavoritesDataStatus = (state: State): boolean => state[NameSpace.favorites].isFavoritesDataLoaded;
