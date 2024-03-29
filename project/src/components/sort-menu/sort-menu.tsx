import {SortOptions} from '../../const';
import {useState, memo} from 'react';
import {useAppDispatch, useAppSelector} from '../../hooks/';
import {changeSorting} from '../../store/offers-data/offers-data';
import {getSortType} from '../../store/offers-data/selectors';

function SortMenu(): JSX.Element {
  const [isMenuOpened, setMenuFlag] = useState(false);
  const sortType = useAppSelector(getSortType);

  const dispatch = useAppDispatch();

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex={0}
        onClick={() => setMenuFlag(!isMenuOpened)}
      >
        {sortType}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className={`places__options places__options--custom
        ${isMenuOpened ? 'places__options--opened' : ''}`}
      >
        {
          Object.values(SortOptions).map((option) => (
            <li className="places__option" key={option} tabIndex={0}
              onClick={() => {
                dispatch(changeSorting(option));
                setMenuFlag(!isMenuOpened);
              }}
            >
              {option}
            </li>
          ))
        }
      </ul>
    </form>
  );
}

export default memo(SortMenu);
