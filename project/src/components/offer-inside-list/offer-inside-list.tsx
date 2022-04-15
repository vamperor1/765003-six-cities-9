import {setKeys} from '../../utils';

type OfferInsideListProps = {
  goods: string[]
}

function OfferInsideList({goods}: OfferInsideListProps): JSX.Element {
  const goodsWithKeys = setKeys(goods);

  return (
    <ul className="property__inside-list">
      {
        goodsWithKeys.map((good) => (
          <li className="property__inside-item" key={good.key}>
            {good.item}
          </li>
        ))
      }
    </ul>
  );
}

export default OfferInsideList;
