import {Route, BrowserRouter, Routes} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../const';
import FavoritesScreen from '../favorites-screen/favorites-screen';
import LoginScreen from '../login-screen/login-screen';
import MainScreen from '../main-screen/main-screen';
import NotFoundScreen from '../not-found-screen/not-found-screen';
import OfferScreen from '../offer-screen/offer-screen';
import PrivateRoute from '../private-route/private-route';
import {Offer} from '../../types/offers';

type AppScreenProps = {
 offers: Offer[];
}

function App({offers}: AppScreenProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Root}
          element={<MainScreen offers={offers}/>}
        />
        <Route
          path={AppRoute.SignIn}
          element={<LoginScreen />}
        />
        <Route
          path={AppRoute.Favorites}
          element={
            <PrivateRoute authorizationStatus={AuthorizationStatus.Auth}>
              <FavoritesScreen offers={offers} />
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoute.Room}
          element={<OfferScreen offers={offers}/>}
        />
        <Route
          path="*"
          element={<NotFoundScreen />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
