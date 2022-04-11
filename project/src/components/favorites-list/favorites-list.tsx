import FavoritesItem from '../favorites-item/favorites-item';
import {Offer} from '../../types/offers';
import {setKeys} from '../../utils';

type FavoritesListProps = {
  favorites: Offer[];
}

function FavoritesList({favorites}: FavoritesListProps): JSX.Element {
  const cities = [...new Set(favorites.map((it) => it.city.name))]
    .sort((a, b) => a > b ? 1 : -1);

  const citiesWithKeys = setKeys(cities);

  return (
    <section className="favorites">
      <h1 className="favorites__title">Saved listing</h1>
      <ul className="favorites__list">
        {citiesWithKeys.map((city) => <FavoritesItem key={city.key} cityName={city.item} favorites={favorites}/>)}
      </ul>
    </section>
  );
}

export default FavoritesList;
