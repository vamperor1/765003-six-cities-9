import PlaceCard from '../place-card/place-card';
import {Offer} from '../../types/offers';
import {AppRoute} from '../../const';
import {Link} from 'react-router-dom';
import {Placement} from '../../const';

type FavoritesItemProps = {
  favorites: Offer[];
  cityName: string;
}

function FavoritesItem({ favorites, cityName }: FavoritesItemProps): JSX.Element {
  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <Link to={AppRoute.Root} className="locations__item-link">
            <span>{cityName}</span>
          </Link>
        </div>
      </div>
      <div className="favorites__places">
        {
          favorites.map((favorite) => favorite.city.name === cityName &&
            <PlaceCard
              placement={Placement.Favorites}
              offer={favorite}
              key={favorite.id}
            />)
        }
      </div>
    </li>
  );
}

export default FavoritesItem;
