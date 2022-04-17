import {AppRoute} from '../../const';
import {Link} from 'react-router-dom';

type CitiesTabsItemProps = {
  cityName: string;
}

function CitiesTabsItem({cityName}: CitiesTabsItemProps): JSX.Element {
  return (
    <li className="locations__item">
      <Link to={AppRoute.Root} className="locations__item-link tabs__item">
        <span>{cityName}</span>
      </Link>
    </li>
  );
}

export default CitiesTabsItem;
