import CitiesTabs from '../cities-tabs/cities-tabs';
import Header from '../header/header';
import OffersList from '../offers-list/offers-list';
import {Offers} from '../../types/offers';
import MainScreenEmpty from '../main-screen-empty/main-screen-empty';


type MainScreenProps = {
  offers: Offers;
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
            {offers ? <OffersList offers={offers} />
              : <MainScreenEmpty />}
          </div>
        </div>
      </main>
    </div>
  );
}

export default MainScreen;
