import OfferReviewsItem from '../offer-reviews-item/offer-reviews-item';
import {Review} from '../../types/reviews';

type OfferReviewsListProps = {
  reviews: Review[];
}

function OfferReviewsList({reviews}: OfferReviewsListProps): JSX.Element {
  return (
    <ul className="reviews__list">
      {reviews.map((review) => <OfferReviewsItem review={review} key={review.id} />)}
    </ul>
  );
}

export default OfferReviewsList;
