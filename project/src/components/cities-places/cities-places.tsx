import Map from '../map/map';
import OffersList from '../offers-list/offers-list';
import SortMenu from '../sort-menu/sort-menu';
import {Offer} from '../../types/offers';
import {Placement} from '../../const';
import {useState} from 'react';

type CitiesPlacesProps = {
  offers: Offer[];
}

function CitiesPlaces({offers}: CitiesPlacesProps): JSX.Element {
  const [activeId, setActiveOfferId] = useState<null | number>(null);

  return (
    <>
      <section className="cities__places places">
        <h2 className="visually-hidden">Places</h2>
        <b className="places__found">
          {offers.length} {offers.length > 1 ? 'places' : 'place'} to stay in {offers[0].city.name}
        </b>
        <SortMenu />
        <OffersList offers={offers} placement={Placement.City} setActiveOfferId={setActiveOfferId} />
      </section>
      <div className="cities__right-section">
        <section className="cities__map map">
          <Map offers={offers} activeId={activeId} />
        </section>
      </div>
    </>
  );
}

export default CitiesPlaces;
