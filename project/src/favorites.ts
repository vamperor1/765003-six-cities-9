import {Offer} from './types/offers';

export const deleteFavorite = (favorites: Offer[], updatedFavorite: Offer): Offer[] => {
  const updatedIndex = favorites.findIndex((it) => it.id === updatedFavorite.id);

  if (updatedIndex >= 0) {
    favorites.splice(updatedIndex, 1);
  }
  return favorites;
};

