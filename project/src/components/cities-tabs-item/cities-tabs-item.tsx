import {Link} from 'react-router-dom';
import {useAppDispatch, useAppSelector} from '../../hooks/';
import {changeCity, getOffers} from '../../store/action';

type CitiesTabsItemProps = {
  cityName: string;
}

function CitiesTabsItem({cityName}: CitiesTabsItemProps): JSX.Element {
  const dispatch = useAppDispatch();
  const currentCity = useAppSelector((state) => state.city);
  const isActive = cityName === currentCity;

  const handleCityChange = (evt: React.SyntheticEvent) => {
    evt.preventDefault();
    dispatch(changeCity(cityName));
    dispatch(getOffers());
  };

  return (
    <li className="locations__item">
      <Link to='#'
        className={
          `locations__item-link tabs__item ${isActive ? 'tabs__item--active' : ''}`
        }
        onClick={handleCityChange}
      >
        <span>{cityName}</span>
      </Link>
    </li>
  );
}

export default CitiesTabsItem;
