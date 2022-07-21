import {AppRoute, AuthorizationStatus} from '../../const';
import {Link} from 'react-router-dom';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {logoutAction} from '../../store/api-actions';
import {getAuthorizationStatus} from '../../store/user-process/selectors';
import {useNavigate} from 'react-router-dom';

function HeaderNav(): JSX.Element {
  const authStatus = useAppSelector(getAuthorizationStatus);
  const isAuthorized = authStatus === AuthorizationStatus.Auth;
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleLogOutClick = () => dispatch(logoutAction());
  const handleFavoritesClick = () => navigate(AppRoute.Favorites);

  return (
    <nav className="header__nav">
      <ul className="header__nav-list">
        <li className="header__nav-item user">
          <Link to={AppRoute.Favorites} className="header__nav-link header__nav-link--profile">
            <div className="header__avatar-wrapper user__avatar-wrapper">
            </div>
            {
              isAuthorized
                ? <span onClick={handleFavoritesClick} className="header__user-name user__name">Oliver.conner@gmail.com</span>
                : <span className="header__login">Sign in</span>
            }
          </Link>
        </li>
        {
          isAuthorized &&
          <li className="header__nav-item">
            <Link to={AppRoute.SignIn} onClick={handleLogOutClick} className="header__nav-link">
              <span className="header__signout">Sign out</span>
            </Link>
          </li>
        }
      </ul>
    </nav>
  );
}

export default HeaderNav;
