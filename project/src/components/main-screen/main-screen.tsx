import CitiesTabs from '../cities-tabs/cities-tabs';
import Header from '../header/header';
import CitiesPlaces from '../cities-places/cities-places';
import {Offer} from '../../types/offers';
import MainScreenEmpty from '../main-screen-empty/main-screen-empty';


type MainScreenProps = {
  offers: Offer[];
}

function MainScreen({offers}: MainScreenProps): JSX.Element {
  return (
    <div className="page page--gray page--main">
      <Header />
      <main className={offers ? 'page__main page__main--index'
        : 'page__main page__main--index page__main--index-empty'}
      >
        <h1 className="visually-hidden">Cities</h1>
        <CitiesTabs />
        <div className="cities">
          <div className={offers ? 'cities__places-container container'
            : 'cities__places-container cities__places-container--empty container'}
          >
            {
              offers
                ? <CitiesPlaces offers={offers} />
                : <MainScreenEmpty />
            }
          </div>
        </div>
      </main>
    </div>
  );
}

export default MainScreen;
