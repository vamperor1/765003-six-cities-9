import CitiesTabs from '../cities-tabs/cities-tabs';
import Header from '../header/header';
import CitiesPlaces from '../cities-places/cities-places';
import {Offer} from '../../types/offers';
import MainScreenEmpty from '../main-screen-empty/main-screen-empty';
import {useAppSelector} from '../../hooks/';

type MainScreenProps = {
  offers: Offer[];
}

function MainScreen({offers}: MainScreenProps): JSX.Element {
  const offersByCity = useAppSelector((state) => state.offers);
  const isEmpty = offersByCity.length > 0;

  return (
    <div className="page page--gray page--main">
      <Header />
      <main className={isEmpty ? 'page__main page__main--index'
        : 'page__main page__main--index page__main--index-empty'}
      >
        <h1 className="visually-hidden">Cities</h1>
        <CitiesTabs offers={offers}/>
        <div className="cities">
          <div className={isEmpty
            ? 'cities__places-container container'
            : 'cities__places-container cities__places-container--empty container'}
          >
            {
              isEmpty
                ? <CitiesPlaces offers={offersByCity} />
                : <MainScreenEmpty />
            }
          </div>
        </div>
      </main>
    </div>
  );
}

export default MainScreen;
