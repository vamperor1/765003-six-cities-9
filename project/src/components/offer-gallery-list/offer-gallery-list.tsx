import {setKeys} from '../../utils';

type OfferGalleryListProps = {
  images: string[];
}

function OfferGalleryList({images}: OfferGalleryListProps): JSX.Element {
  const imagesWithKeys = setKeys(images);

  return (
    <div className="property__gallery-container container">
      <div className="property__gallery">
        {
          images.length > 0 &&
          imagesWithKeys.map((image) => (
            <div className="property__image-wrapper" key={image.key}>
              <img className="property__image" src={image.item} alt="Offer gallery" />
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default OfferGalleryList;
