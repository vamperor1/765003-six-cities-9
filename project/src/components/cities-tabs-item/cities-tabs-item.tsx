type CitiesTabsItemProps = {
  cityName: string;
}

function CitiesTabsItem({cityName}: CitiesTabsItemProps): JSX.Element {
  // Пока без активного таба и фильтрации
  return (
    <li className="locations__item">
      <a className="locations__item-link tabs__item" href="/">
        <span>{cityName}</span>
      </a>
    </li>
  );
}

export default CitiesTabsItem;
