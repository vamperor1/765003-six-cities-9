import {Link} from 'react-router-dom';
import {AppRoute} from '../../const';

function NotFoundScreen(): JSX.Element {
  return (
    <div className="container">
      <section className="not-found">
        <h1 className="not-found__status">404. Page not found</h1>
        <Link className="not-found__link" to={AppRoute.Root}>Back to main page</Link>
      </section>
    </div>
  );
}

export default NotFoundScreen;
