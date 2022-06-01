import PlaceCard from '../place-card/place-card';
import {Offer} from '../../types/offers';
import {PlaceCardClasses} from '../../const';
import {Placement} from '../../const';

type OffersListProps = {
  offers: Offer[];
  placement: Placement;
  setActiveOfferId?: (activeId: null | number) => void;
}

function OffersList({offers, placement, setActiveOfferId}: OffersListProps): JSX.Element {
  return (
    <div className={PlaceCardClasses.listClass[placement]}>
      {
        offers.map((offer) => (
          <PlaceCard
            placement={placement}
            offer={offer}
            key={offer.id}
            setActiveOfferId={setActiveOfferId}
          />))
      }
    </div>
  );
}

export default OffersList;
