import Map from '../map/map';
import PlaceCard from '../place-card/place-card';
import OffersListRoot from '../offers-list-root/offers-list-root';
import OffersListOffer from '../offers-list-offer/offers-list-offer';
import {Offer} from '../../types/offers';
import {useState} from 'react';
import {useLocation} from 'react-router-dom';
import {AppRoute} from '../../const';

type OffersListProps = {
  offers: Offer[];
}

function OffersList({offers}: OffersListProps): JSX.Element {
  const [activeId, setActiveOfferId] = useState<null | number>(null);
  const location = useLocation().pathname;
  const isRoot = location === AppRoute.Root;

  return (
    <>
      <section className={`${isRoot ? 'cities__places' : 'near-places'} places}`}>
        {
          isRoot
            ? <OffersListRoot />
            : <OffersListOffer />
        }
        <div className=
          {
            `${isRoot ? 'cities__places-list tabs__content' : 'near-places__list'}
            places__list`
          }
        >
          {offers.map((offer) => <PlaceCard isRoot={isRoot} offer={offer} key={offer.id} setActiveOfferId={setActiveOfferId} />)}
        </div>
      </section>
      <div className="cities__right-section">
        <section className="cities__map map">
          <Map offers={offers} activeId={activeId}/>
        </section>
      </div>
    </>
  );
}

export default OffersList;
