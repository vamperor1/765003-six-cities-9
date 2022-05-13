import {Offer} from './types/offers';

export const getOffersByCity = (city: string, offers: Offer[]): Offer[] => (
  offers.filter((offer: Offer) => offer.city.name === city)
);
