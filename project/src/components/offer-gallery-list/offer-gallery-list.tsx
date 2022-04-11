import OfferGalleryItem from '../offer-gallery-item/offer-gallery-item';
import {setKeys} from '../../utils';

type OfferGalleryListProps = {
  images: string[];
}

function OfferGalleryList({images}: OfferGalleryListProps): JSX.Element {
  const imagesWithKeys = setKeys(images);

  return (
    <div className="property__gallery-container container">
      <div className="property__gallery">
        {imagesWithKeys.map((image) => <OfferGalleryItem image={image.item} key={image.key} />)}
      </div>
    </div>
  );
}

export default OfferGalleryList;
