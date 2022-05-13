import {useRef, useEffect} from 'react';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import {Offer} from '../../types/offers';
import useMap from '../use-map/use-map';
import {UrlMarkers} from '../../const';

type MapProps = {
  offers: Offer[];
  activeId: number | null;
}

const defaultCustomIcon = leaflet.icon({
  iconUrl: UrlMarkers.Default,
  iconSize: [27, 39],
  iconAnchor: [13.5, 39],
});

const currentCustomIcon = leaflet.icon({
  iconUrl: UrlMarkers.Current,
  iconSize: [27, 39],
  iconAnchor: [13.5, 39],
});

function Map({offers, activeId}: MapProps): JSX.Element {
  const city = offers[0].city;
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  useEffect(() => {
    if (map) {
      map.flyTo(
        [city.location.latitude, city.location.longitude],
        city.location.zoom,
        {
          animate: false,
          duration: 1.5,
        },
      );
      offers.forEach((offer) => {
        leaflet
          .marker({
            lat: offer.location.latitude,
            lng: offer.location.longitude,
          }, {
            icon: (offer.id === activeId)
              ? currentCustomIcon
              : defaultCustomIcon,
          })
          .addTo(map);
      });
    }
  }, [activeId, city.location.latitude, city.location.longitude, city.location.zoom, map, offers]);

  return (
    <div
      ref={mapRef}
      style={{height: '100%'}}
    >
    </div>
  );
}

export default Map;
