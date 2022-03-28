type OfferReviewsRatingProps = {
  setRating: (rating: string) => void;
  inputData: {
    star: string,
    title: string
  }
}

function OfferReviewsRating({inputData, setRating}: OfferReviewsRatingProps): JSX.Element {
  const {star, title} = inputData;
  const idValue = `${star}-star`;

  const handleRatingChange = (evt: {target: {value: string;};}) => {
    const ratingValue = evt.target.value;
    setRating(ratingValue);
  };

  return (
    <>
      <input onChange={handleRatingChange} className="form__rating-input visually-hidden" name="rating" value={star} id={idValue} type="radio" />
      <label htmlFor={idValue} className="reviews__rating-label form__rating-label" title={title}>
        <svg className="form__star-image" width="37" height="33">
          <use xlinkHref="#icon-star"></use>
        </svg>
      </label>
    </>
  );
}

export default OfferReviewsRating;
