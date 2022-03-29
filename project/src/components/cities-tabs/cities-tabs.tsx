import CitiesTabsItem from '../cities-tabs-item/cities-tabs-item';

const CITIES = ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'];
const citiesData = CITIES.map((city, i) => ({
  cityName: city,
  key: i,
}));

function CitiesTabs(): JSX.Element {
  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {citiesData.map((city, i) => <CitiesTabsItem key={city.key} cityName={city.cityName} />)}
        </ul>
      </section>
    </div>
  );
}

export default CitiesTabs;
