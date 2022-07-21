import {Navigate} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../const';
import {useAppSelector} from '../../hooks/';
import LoadingScreen from '../loading-screen/loading-screen';
import {getAuthorizationStatus, getAuthorizationProgress} from '../../store/user-process/selectors';

type PrivateRouteProps = {
  children: JSX.Element;
}

function PrivateRoute(props: PrivateRouteProps): JSX.Element {
  const {children} = props;
  const authStatus = useAppSelector(getAuthorizationStatus);
  const isAuthComplete = useAppSelector(getAuthorizationProgress);

  if (!isAuthComplete) {
    return <LoadingScreen />;
  }

  return (
    authStatus === AuthorizationStatus.Auth
      ? children
      : <Navigate to={AppRoute.SignIn} />
  );
}

export default PrivateRoute;
