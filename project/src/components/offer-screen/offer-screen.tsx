import Header from '../header/header';
import OfferReviewsList from '../offer-reviews-list/offer-reviews-list';
import OfferReviewsForm from '../offer-reviews-form/offer-reviews-form';
import LoadingScreen from '../loading-screen/loading-screen';
import OfferInsideList from '../offer-inside-list/offer-inside-list';
import OfferGalleryList from '../offer-gallery-list/offer-gallery-list';
import OffersList from '../offers-list/offers-list';
import Map from '../map/map';
import NotFoundScreen from '../not-found-screen/not-found-screen';
import {useParams} from 'react-router-dom';
import {getPercentRating} from '../../utils';
import {MAX_IMAGES_COUNT, Placement, AuthorizationStatus} from '../../const';
import {useAppSelector, useAppDispatch} from '../../hooks';
import {useEffect} from 'react';
import {fetchOfferDetailsAction, fetchNearOffersAction, fetchReviewsAction} from '../../store/api-actions';
import {getOfferDetails, getNearOffers, getLoadedOfferDetailsDataStatus, getLoadedNearOffersDataStatus} from '../../store/offers-data/selectors';
import {getReviews, getLoadedReviewsData} from '../../store/reviews-data/selectors';
import {getAuthorizationStatus} from '../../store/user-process/selectors';


function OfferScreen(): JSX.Element {
  const dispatch = useAppDispatch();
  const id = useParams<{id: string}>().id || '';

  const offer = useAppSelector(getOfferDetails);
  const nearOffers = useAppSelector(getNearOffers);
  const reviews = useAppSelector(getReviews);
  const authStatus = useAppSelector(getAuthorizationStatus);

  const isOfferDetailsDataLoaded = useAppSelector(getLoadedOfferDetailsDataStatus);
  const isNearOffersDataLoaded = useAppSelector(getLoadedNearOffersDataStatus);
  const isReviewsDataLoaded = useAppSelector(getLoadedReviewsData);

  useEffect (() => {
    dispatch(fetchOfferDetailsAction(id));
    dispatch(fetchNearOffersAction(id));
    dispatch(fetchReviewsAction(id));
  }, [dispatch, id]);

  if (!isOfferDetailsDataLoaded || !isNearOffersDataLoaded || !isReviewsDataLoaded) {
    return (
      <LoadingScreen />
    );
  }

  if (!offer) {
    return (
      <NotFoundScreen />
    );
  }

  const {isPremium, title, rating, type, bedrooms, maxAdults, price, description, images} = offer;
  const {name, isPro, avatarUrl} = offer.host;

  const isAuthorized = authStatus === AuthorizationStatus.Auth;

  const avatarClass = `property__avatar-wrapper ${
    isPro ? 'property__avatar-wrapper--pro' : null
  } user__avatar-wrapper`;

  const shownType = type.slice(0, 1).toUpperCase() + type.slice(1);
  const shownImages = images.length > MAX_IMAGES_COUNT ? images.slice(0, MAX_IMAGES_COUNT) : images;

  const starRating = getPercentRating(rating);

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
                {
                  reviews.length > 0 &&
                  <>
                    <h2 className="reviews__title">
                      Reviews &middot; <span className="reviews__amount">{reviews.length}</span>
                    </h2>
                    <OfferReviewsList reviews={reviews}/>
                  </>
                }
                {
                  isAuthorized &&
                  <OfferReviewsForm id={id} />
                }
              </section>
            </div>
          </div>
          <section className="property__map map">
            <Map offers={[...nearOffers, offer]} activeId={offer.id}/>
          </section>
        </section>
        <div className="container">
          <OffersList placement={Placement.Near} offers={nearOffers} />
        </div>
      </main>
    </div>
  );
}

export default OfferScreen;
