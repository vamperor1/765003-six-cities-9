import CitiesTabsItem from '../cities-tabs-item/cities-tabs-item';
import {CITIES} from '../../const';
import {Offer} from '../../types/offers';

type CitiesTabsProps = {
  offers: Offer[];
}

function CitiesTabs({offers}: CitiesTabsProps): JSX.Element {
  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {CITIES.map((city) => <CitiesTabsItem key={city} offers={offers} cityName={city} />)}
        </ul>
      </section>
    </div>
  );
}

export default CitiesTabs;
