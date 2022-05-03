import {Offer} from './types/offers';
// Функция принимает все офферы и возвращает офферы по городу
// Импортируется в редюсер

export const getOffersByCity = (city: string, offers: Offer[]): Offer[] => (
  offers.filter((offer: Offer) => offer.city.name === city)
);
