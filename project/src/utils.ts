import {MAX_RATING} from './const';

export function getPercentRating(rating: number): string {
  return `${Math.round(rating) * 100 / MAX_RATING}%`;
}

export function getRouteWithId(offerId: number, route: string): string {
  return route.replace(':id', offerId.toString());
}
