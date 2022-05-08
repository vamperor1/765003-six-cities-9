import {SORT_OPTIONS} from '../../const';
import {useState} from 'react';
import {useAppDispatch, useAppSelector} from '../../hooks/';
import {changeSorting} from '../../store/action';

function SortMenu(): JSX.Element {
  const [isMenuOpened, setMenuFlag] = useState(false);
  const sortType = useAppSelector((state) => state.sortType);

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
          SORT_OPTIONS.map((option) => (
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

export default SortMenu;
