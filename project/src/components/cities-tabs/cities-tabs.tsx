import CitiesTabsItem from '../cities-tabs-item/cities-tabs-item';
import {CITIES} from '../../const';

function CitiesTabs(): JSX.Element {
  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {CITIES.map((city) => <CitiesTabsItem key={city} cityName={city} />)}
        </ul>
      </section>
    </div>
  );
}

export default CitiesTabs;
