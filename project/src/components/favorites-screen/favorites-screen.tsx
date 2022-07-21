import FavoritesList from '../favorites-list/favorites-list';
import FavoritesScreenEmpty from '../favorites-screen-empty/favorites-screen-empty';
import Header from '../header/header';
import Footer from '../footer/footer';
import LoadingScreen from '../loading-screen/loading-screen';
import {useAppSelector, useAppDispatch} from '../../hooks';
import {getFavorites, getLoadedFavoritesDataStatus} from '../../store/favorites-data/selectors';
import {fetchFavoritesAction} from '../../store/api-actions';
import {useEffect} from 'react';

function FavoritesScreen(): JSX.Element {
  const dispatch = useAppDispatch();

  const favorites = useAppSelector(getFavorites);
  const isFavoritesDataLoaded = useAppSelector(getLoadedFavoritesDataStatus);
  const isEmpty = favorites.length === 0;

  useEffect(() => {
    dispatch(fetchFavoritesAction());
  }, [dispatch]);

  if (!isFavoritesDataLoaded) {
    return <LoadingScreen />;
  }

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
