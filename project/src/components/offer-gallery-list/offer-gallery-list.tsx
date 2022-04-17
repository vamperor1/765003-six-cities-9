type OfferGalleryListProps = {
  images: string[];
}

function OfferGalleryList({images}: OfferGalleryListProps): JSX.Element {
  return (
    <div className="property__gallery-container container">
      <div className="property__gallery">
        {
          images.length > 0 &&
          images.map((image) => (
            <div className="property__image-wrapper" key={image}>
              <img className="property__image" src={image} alt="Offer gallery" />
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default OfferGalleryList;
