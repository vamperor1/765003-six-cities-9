import {AppRoute} from '../../const';
import {Link} from 'react-router-dom';
import {Offer} from '../../types/offers';
import {getPercentRating} from '../../utils';
import {getRouteWithId} from '../../utils';
import {PlaceCardClasses} from '../../const';
import {Placement} from '../../const';
import {useAppDispatch} from '../../hooks/index';
import {setFavoriteAction} from '../../store/api-actions';

type PlaceCardProps = {
  offer: Offer;
  placement: Placement;
  setActiveOfferId?: (activeId: null | number) => void;
}

function PlaceCard({placement, offer, setActiveOfferId}: PlaceCardProps): JSX.Element {
  const dispatch = useAppDispatch();

  const {previewImage, isPremium, price, title, type, rating, id} = offer;
  const starRating = getPercentRating(rating);

  const handleFavoriteClick = () => {
    const favoriteStatus = offer.isFavorite ? 0 : 1;
    dispatch(setFavoriteAction({id: offer.id, status: favoriteStatus}));
  };

  return (
    <article className={`${PlaceCardClasses.placeCard[placement]} place-card`}
      onMouseEnter={() => setActiveOfferId?.(offer.id)}
      onMouseLeave={() => setActiveOfferId?.(null)}
    >
      {
        isPremium &&
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      }
      <div className={`${PlaceCardClasses.imageWrapper[placement]} place-card__image-wrapper`}>
        <Link to={getRouteWithId(id, AppRoute.Room)}>
          <img
            className="place-card__image" src={previewImage}
            width={PlaceCardClasses.imgWidth[placement]}
            height={PlaceCardClasses.imgHeight[placement]} alt="Place"
          />
        </Link>
      </div>
      <div className={`${PlaceCardClasses.placeCardInfo[placement]} place-card__info`}>
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button
            onClick={handleFavoriteClick}
            className={`place-card__bookmark-button button ${offer.isFavorite ? 'place-card__bookmark-button--active' : null}`}
            type="button"
          >
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
          <Link to={getRouteWithId(id, AppRoute.Room)}>
            {title}
          </Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}

export default PlaceCard;
