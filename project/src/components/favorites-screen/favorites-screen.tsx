import FavoritesList from '../favorites-list/favorites-list';
import FavoritesScreenEmpty from '../favorites-screen-empty/favorites-screen-empty';
import Header from '../header/header';
import Footer from '../footer/footer';
import {useAppSelector} from '../../hooks';
import {getSortedOffers} from '../../store/offers-data/selectors';

function FavoritesScreen(): JSX.Element {
  const offers = useAppSelector(getSortedOffers);
  const favorites = offers.filter((offer) => offer.isFavorite);
  const isEmpty = favorites.length === 0;

  return (
    <div className={isEmpty ? 'page page--favorites-empty' : 'page'}>
      <Header />
      <main className={isEmpty
        ? 'page__main page__main--favorites page__main--favorites-empty'
        : 'page__main page__main--favorites'}
      >
        <div className="page__favorites-container container">
          {isEmpty
            ? <FavoritesScreenEmpty />
            : <FavoritesList favorites={favorites} />}
        </div>
      </main >
      <Footer />
    </div>
  );
}

export default FavoritesScreen;
