import Header from '../header/header';
import OfferReviewsList from '../offer-reviews-list/offer-reviews-list';
import OfferReviewsForm from '../offer-reviews-form/offer-reviews-form';
import NotFoundScreen from '../not-found-screen/not-found-screen';
import OfferInsideList from '../offer-inside-list/offer-inside-list';
import OfferGalleryList from '../offer-gallery-list/offer-gallery-list';
import OffersList from '../offers-list/offers-list';
import Map from '../map/map';
import {Offer} from '../../types/offers';
import {reviews} from '../../mocks/reviews';
import {useParams} from 'react-router-dom';
import {setStarRating} from '../../utils';

type OfferScreenProps = {
  offers: Offer[];
}

function OfferScreen({offers}: OfferScreenProps): JSX.Element {
  const {id} = useParams<{id: string}>();
  const offer = id ? offers.find((it) => it.id === parseInt(id, 10)) : null;

  if (!offer) {
    return <NotFoundScreen />;
  }

  const {isPremium, title, rating, type, bedrooms, maxAdults, price, description, images} = offer;
  const {name, isPro, avatarUrl} = offer.host;
  const avatarClass = `property__avatar-wrapper ${
    isPro ? 'property__avatar-wrapper--pro' : null
  } user__avatar-wrapper`;
  const shownType = type.slice(0, 1).toUpperCase() + type.slice(1);
  const shownImages = images.length > 6 ? images.slice(0, 6) : images;
  const nearOffers = offers.slice(0, 3);
  const starRating = setStarRating(rating);

  return (
    <div className="page">
      <Header />
      <main className="page__main page__main--property">
        <section className="property">
          {
            shownImages.length > 0 &&
            <OfferGalleryList images={shownImages}/>
          }
          <div className="property__container container">
            <div className="property__wrapper">
              {
                isPremium &&
                <div className="property__mark">
                  <span>Premium</span>
                </div>
              }
              <div className="property__name-wrapper">
                <h1 className="property__name">
                  {title}
                </h1>
                <button className="property__bookmark-button button" type="button">
                  <svg className="property__bookmark-icon" width="31" height="33">
                    <use xlinkHref="#icon-bookmark"></use>
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span style={{ width: starRating }}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">{rating}</span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">
                  {shownType}
                </li>
                <li className="property__feature property__feature--bedrooms">
                  {bedrooms} {bedrooms > 1 ? 'Bedrooms' : 'Bedroom'}
                </li>
                <li className="property__feature property__feature--adults">
                  Max {maxAdults} {maxAdults > 1 ? 'adults' : 'adult'}
                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">&euro;{price}</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              <div className="property__inside">
                <h2 className="property__inside-title">What&apos;s inside</h2>
                {
                  offer.goods.length > 0 &&
                  <OfferInsideList goods={offer.goods}/>
                }
              </div>
              <div className="property__host">
                <h2 className="property__host-title">Meet the host</h2>
                <div className="property__host-user user">
                  <div className={avatarClass}>
                    <img className="property__avatar user__avatar" src={avatarUrl} width="74" height="74" alt="Host avatar" />
                  </div>
                  <span className="property__user-name">
                    {name}
                  </span>
                  {
                    isPro &&
                    <span className="property__user-status">
                      Pro
                    </span>
                  }
                </div>
                <div className="property__description">
                  <p className="property__text">
                    {description}
                  </p>
                </div>
              </div>
              <section className="property__reviews reviews">
                <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
                {
                  reviews.length > 0 &&
                  <OfferReviewsList reviews={reviews}/>
                }
                <OfferReviewsForm />
              </section>
            </div>
          </div>
          <section className="property__map map">
            <Map offers={offers} activeId={offer.id}/>
          </section>
        </section>
        <div className="container">
          <OffersList offers={nearOffers} />
        </div>
      </main>
    </div>
  );
}

export default OfferScreen;
