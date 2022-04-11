type OfferGalleryItemProps = {
  image: string;
}

function OfferGalleryItem({image}: OfferGalleryItemProps): JSX.Element {
  return (
    <div className="property__image-wrapper">
      <img className="property__image" src={image} alt="Offer gallery" />
    </div>
  );
}

export default OfferGalleryItem;
