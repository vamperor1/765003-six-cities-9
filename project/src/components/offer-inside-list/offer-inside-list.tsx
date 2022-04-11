import OfferInsideItem from '../offer-inside-item/offer-inside-item';
import {setKeys} from '../../utils';

type OfferInsideListProps = {
  goods: string[]
}

function OfferInsideList({goods}: OfferInsideListProps): JSX.Element {
  const goodsWithKeys = setKeys(goods);

  return (
    <ul className="property__inside-list">
      {goodsWithKeys.map((it) => <OfferInsideItem item={it.item} key={it.key}/>)}
    </ul>
  );
}

export default OfferInsideList;
