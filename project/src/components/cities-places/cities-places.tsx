import Map from '../map/map';
import OffersList from '../offers-list/offers-list';
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
          {`${offers.length} ${offers.length > 1 ? 'places' : 'place'}
           to stay in ${offers[0].city.name}`}
        </b>
        <form className="places__sorting" action="#" method="get">
          <span className="places__sorting-caption">Sort by</span>
          <span className="places__sorting-type" tabIndex={0}>
            Popular
            <svg className="places__sorting-arrow" width="7" height="4">
              <use xlinkHref="#icon-arrow-select"></use>
            </svg>
          </span>
          <ul className="places__options places__options--custom places__options--opened">
            <li className="places__option places__option--active" tabIndex={0}>Popular</li>
            <li className="places__option" tabIndex={0}>Price: low to high</li>
            <li className="places__option" tabIndex={0}>Price: high to low</li>
            <li className="places__option" tabIndex={0}>Top rated first</li>
          </ul>
        </form>
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
