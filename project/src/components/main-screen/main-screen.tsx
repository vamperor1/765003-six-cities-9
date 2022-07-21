import CitiesTabs from '../cities-tabs/cities-tabs';
import Header from '../header/header';
import CitiesPlaces from '../cities-places/cities-places';
import MainScreenEmpty from '../main-screen-empty/main-screen-empty';
import {useAppSelector} from '../../hooks/';
import {getSortedOffers} from '../../store/offers-data/selectors';

function MainScreen(): JSX.Element {
  const sortedOffers = useAppSelector(getSortedOffers);
  const isEmpty = sortedOffers.length > 0;

  return (
    <div className="page page--gray page--main">
      <Header />
      <main className={isEmpty ? 'page__main page__main--index'
        : 'page__main page__main--index page__main--index-empty'}
      >
        <h1 className="visually-hidden">Cities</h1>
        <CitiesTabs />
        <div className="cities">
          <div className={isEmpty
            ? 'cities__places-container container'
            : 'cities__places-container cities__places-container--empty container'}
          >
            {
              isEmpty
                ? <CitiesPlaces offers={sortedOffers}/>
                : <MainScreenEmpty />
            }
          </div>
        </div>
      </main>
    </div>
  );
}

export default MainScreen;
