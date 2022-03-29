import HeaderNav from '../header-nav/header-nav';
import {AppRoute} from '../../const';
import {Link, useLocation} from 'react-router-dom';

function Header(): JSX.Element {
  const location = useLocation();

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Link to={AppRoute.Root} className="header__logo-link header__logo-link--active">
              <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
            </Link>
          </div>
          {
            location.pathname !== AppRoute.SignIn &&
              <HeaderNav />
          }
        </div>
      </div>
    </header>
  );
}

export default Header;
