const MAX_RATING = 5;

type Keys = {
  item: string;
  key: number;
}

export function setKeys(arr: string[]): Keys[] {
  return arr.map((it, i) => ({
    item: it,
    key: i + 1,
  }));
}

export function setStarRating(rating: number): string {
  return `${Math.round(rating) * 100 / MAX_RATING}%`;
}

export function getRouteWithId(offerId: number, route: string): string {
  return route.replace(':id', offerId.toString());
}
