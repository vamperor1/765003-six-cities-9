import FavoritesCard from '../favorites-card/favorites-card';
import {Offers} from '../../types/offers';

type FavoritesItemProps = {
  favorites: Offers;
  cityName: string;
}

function FavoritesItem({favorites, cityName}: FavoritesItemProps): JSX.Element {
  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <a className="locations__item-link" href="/">
            <span>{cityName}</span>
          </a>
        </div>
      </div>
      <div className="favorites__places">
        {favorites.map((favorite) => favorite.city.name === cityName
          ? <FavoritesCard key={favorite.id} favorite={favorite} />
          : null)}
      </div>
    </li>
  );
}

export default FavoritesItem;
