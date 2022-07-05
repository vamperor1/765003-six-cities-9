import {Offer} from './types/offers';
import {SortOptions} from './const';
import {MAX_REVIEWS_COUNT} from './const';
import {Review} from './types/reviews';

export const getOffersByCity = (city: string, offers: Offer[]): Offer[] => (
  offers.filter((offer: Offer) => offer.city.name === city)
);

export const sortOffers = (sortType: string, offers: Offer[]): Offer[] => {
  const sortedOffers = offers.slice();

  switch(sortType) {
    case SortOptions.LOW_PRICE_FIRST:
      return sortedOffers.sort((a, b) => a.price > b.price ? 1 : -1);
    case SortOptions.HIGH_PRICE_FIRST:
      return sortedOffers.sort((a, b) => b.price > a.price ? 1 : -1);
    case SortOptions.TOP_RATED_FIRST:
      return sortedOffers.sort((a, b) => b.rating > a.rating ? 1 : -1);
    default:
      return offers;
  }
};

export const sortReviews = (reviews: Review[]): Review[] => {
  const showedReviews = reviews.length > MAX_REVIEWS_COUNT
    ? reviews.slice(0, MAX_REVIEWS_COUNT) : reviews;
  const sortedReviews = showedReviews.sort((a, b) => b.date > a.date ? 1 : -1);

  return sortedReviews;
};
