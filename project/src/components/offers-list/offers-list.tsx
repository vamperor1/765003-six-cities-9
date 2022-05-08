import PlaceCard from '../place-card/place-card';
import {Offer} from '../../types/offers';
import {PlaceCardClasses} from '../../const';
import {Placement} from '../../const';
import {useAppSelector} from '../../hooks/';
import {SORT_OPTIONS} from '../../const';

type OffersListProps = {
  offers: Offer[];
  placement: Placement;
  setActiveOfferId?: (activeId: null | number) => void;
}

function OffersList({offers, placement, setActiveOfferId}: OffersListProps): JSX.Element {
  const sortType = useAppSelector((state) => state.sortType);
  const sortedOffers = offers.slice();

  // Не очень нравится с точки зрения наглядности применение массива SORT_OPTIONS
  // в кейсах, но я пока не нашел другого варианта, чтобы не дублировать список сортировки
  // в более наглядный enum, например.
  // Или это допустимая практика с индексом массива в качестве переменной?
  switch(sortType) {
    case SORT_OPTIONS[1]:
      sortedOffers.sort((a, b) => a.price > b.price ? 1 : -1);
      break;
    case SORT_OPTIONS[2]:
      sortedOffers.sort((a, b) => b.price > a.price ? 1 : -1);
      break;
    case SORT_OPTIONS[3]:
      sortedOffers.sort((a, b) => b.rating > a.rating ? 1 : -1);
      break;
  }

  return (
    <div className={PlaceCardClasses.listClass[placement]}>
      {
        sortedOffers.map((offer) => (
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
