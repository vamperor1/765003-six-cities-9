import {Review} from '../../types/reviews';
import {getPercentRating} from '../../utils';

type OfferReviewsItemProps = {
  review: Review;
}

function OfferReviewsItem({review}: OfferReviewsItemProps): JSX.Element {
  const {name, avatarUrl} = review.user;
  const {rating, comment, date} = review;
  const dateData = new Date(date);
  const reviewMonth = dateData.toLocaleString('en-US', {month: 'long'});
  const reviewYear = dateData.getFullYear();
  const starRating = getPercentRating(rating);

  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={avatarUrl} width="54" height="54" alt="Reviews avatar" />
        </div>
        <span className="reviews__user-name">
          {name}
        </span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{width: starRating}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          {comment}
        </p>
        <time className="reviews__time" dateTime={date}>{reviewMonth} {reviewYear}</time>
      </div>
    </li>
  );
}

export default OfferReviewsItem;
