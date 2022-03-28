import {AppRoute} from '../../const';
import {Link} from 'react-router-dom';
import {Offer} from '../../types/offers';
import {setStarRating} from '../../utils';
import {getRouteWithId} from '../../utils';


type PlaceCardProps = {
  offer: Offer;
  setActiveOffer: (activeId: null | number) => void;
}

function PlaceCard({offer, setActiveOffer}: PlaceCardProps): JSX.Element {
  const {previewImage, isPremium, price, title, type, rating, id} = offer;
  const starRating = setStarRating(rating);

  return (
    <article className="cities__place-card place-card" onMouseOver={() => setActiveOffer(offer.id)}>
      {
        isPremium &&
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      }
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={AppRoute.Root}>
          <img className="place-card__image" src={previewImage} width="260" height="200" alt="Place" />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className="place-card__bookmark-button button" type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: starRating }}></span>
            <span className="visually-hidden">Rating {rating}</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={getRouteWithId(id, AppRoute.Room)}>{title}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}

export default PlaceCard;
