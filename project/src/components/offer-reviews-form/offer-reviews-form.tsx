import OfferReviewsRating from '../offer-reviews-rating/offer-reviews-rating';
import {useState} from 'react';
import {REVIEWS_RATING} from '../../const';

function OfferReviewsForm(): JSX.Element {
  // TODO: Переменную rating убрал, чтобы не было ошибки из=за неиспользуемой переменной
  const [, setRating] = useState('');
  const [review, setReview] = useState('');

  const reviewChangeHandler = (evt: {target: {value: string}}) => {
    const reviewValue = evt.target.value;
    setReview(reviewValue);
  };

  return (
    <form className="reviews__form form" action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {REVIEWS_RATING.map((it) => <OfferReviewsRating key={it.star} inputData={it} setRating={setRating}/>)}
      </div>
      <textarea onChange={reviewChangeHandler} value={review} className="reviews__textarea form__textarea" id="review" name="review" placeholder="Tell how was your stay, what you like and what can be improved"></textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled>Submit</button>
      </div>
    </form>
  );
}

export default OfferReviewsForm;
