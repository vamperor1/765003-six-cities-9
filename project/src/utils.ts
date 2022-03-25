const MAX_RATING = 5;

export function setKeys(keysCount: number): number[] {
  return new Array(keysCount).fill(0).map((it, i) => it = i + 1);
}

export function setStarRating(rating: number): string {
  return `${Math.round(rating) * 100 / MAX_RATING}%`;
}

export function setOfferRoute(offerId: number, route: string): string {
  return route.replace(':id', offerId.toString());
}
