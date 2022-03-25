import {Offer} from '../../types/offers';
import {setStarRating} from '../../utils';

type FavoritesCardProps = {
  favorite: Offer;
}

function FavoritesCard({favorite}: FavoritesCardProps): JSX.Element {
  const {previewImage, isPremium, price, title, type, rating} = favorite;
  const starRating = setStarRating(rating);

  return (
    <article className="favorites__card place-card">
      {
        isPremium ?
          <div className="place-card__mark">
            <span>Premium</span>
          </div> : ''
      }
      <div className="favorites__image-wrapper place-card__image-wrapper">
        <a href="/">
          <img className="place-card__image" src={previewImage} width="150" height="110" alt="Place" />
        </a>
      </div>
      <div className="favorites__card-info place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className="place-card__bookmark-button place-card__bookmark-button--active button" type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">In bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: starRating }}></span>
            <span className="visually-hidden">{rating}</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a href="/">{title}</a>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}

export default FavoritesCard;
