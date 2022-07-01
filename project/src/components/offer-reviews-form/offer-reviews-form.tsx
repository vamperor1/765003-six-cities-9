import OfferReviewsRating from '../offer-reviews-rating/offer-reviews-rating';
import { useState, useRef, FormEvent } from 'react';
import { REVIEWS_RATING } from '../../const';
import { postReviewAction } from '../../store/api-actions';
import { useAppDispatch } from '../../hooks';
import { ReviewData } from '../../types/review';

type OfferReviewsFormProps = {
  id: string;
}

function OfferReviewsForm({ id }: OfferReviewsFormProps): JSX.Element {
  const [rating, setRating] = useState('');
  const [review, setReview] = useState('');
  const dispatch = useAppDispatch();

  const formRef = useRef<HTMLFormElement | null>(null);
  const fieldsetRef = useRef<HTMLFieldSetElement | null>(null);
  const isReviewValid = rating.length > 0 && (review.length > 50 && review.length < 300);

  const resetForm = () => {
    if (formRef.current !== null) {
      formRef.current.reset();
      setReview('');
    }
  };

  const unblockForm = () => {
    if (fieldsetRef.current !== null) {
      fieldsetRef.current.disabled = false;
    }
  };

  const onSubmit = (reviewData: ReviewData) => {
    dispatch(postReviewAction(reviewData));
  };

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (isReviewValid && fieldsetRef.current !== null) {
      fieldsetRef.current.disabled = true;

      onSubmit({
        id: parseInt(id, 10),
        comment: review,
        rating: parseInt(rating, 10),
        resetForm,
        unblockForm,
      });
    }
  };

  const reviewChangeHandler = (evt: { target: { value: string } }) => {
    const reviewValue = evt.target.value;
    setReview(reviewValue);
  };

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="reviews__form form" action="#" method="post">
      <fieldset className='reviews__fieldset' ref={fieldsetRef}>
        <label className="reviews__label form__label" htmlFor="review">Your review</label>
        <div className="reviews__rating-form form__rating">
          {REVIEWS_RATING.map((it) => <OfferReviewsRating key={it.star} inputData={it} setRating={setRating} />)}
        </div>
        <textarea
          onChange={reviewChangeHandler}
          value={review}
          className="reviews__textarea form__textarea"
          id="review"
          name="review"
          placeholder="Tell how was your stay, what you like and what can be improved"
        >
        </textarea>
        <div className="reviews__button-wrapper">
          <p className="reviews__help">
            To submit review please make sure to set&nbsp;
            <span className="reviews__star">rating</span>
            and describe your stay with at least&nbsp;
            <b className="reviews__text-amount">50 characters</b>.
          </p>
          <button
            className="reviews__submit form__submit button"
            type="submit"
            disabled={!isReviewValid}
          >
            Submit
          </button>
        </div>
      </fieldset>
    </form>
  );
}

export default OfferReviewsForm;
