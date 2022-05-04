import OfferReviewsItem from '../offer-reviews-item/offer-reviews-item';
import {Review} from '../../types/reviews';

type OfferReviewsListProps = {
  reviews: Review[];
}

function OfferReviewsList({reviews}: OfferReviewsListProps): JSX.Element {
  const sortedReviews = reviews.sort((a, b) => b.date > a.date ? 1 : -1);
  const showedReviews = sortedReviews.length > 10 ? reviews.slice(0, 10) : sortedReviews;

  return (
    <ul className="reviews__list">
      {showedReviews.map((review) => <OfferReviewsItem review={review} key={review.id} />)}
    </ul>
  );
}

export default OfferReviewsList;
