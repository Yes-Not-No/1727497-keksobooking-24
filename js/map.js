import { activateForm, adForm, filterForm, addressInput } from './form.js';
import { similarAdsArray } from './data.js';
import { drowCard } from './cards.js';

const TOKIO_COORDINATES = {
  lat: 35.6895000,
  lng: 139.6917100,
};

addressInput.value = `${String(TOKIO_COORDINATES.lat).slice(0, 8)} ${String(TOKIO_COORDINATES.lng).slice(0, 9)}`;

const map = L.map('map')
  .on('load', () => {
    activateForm(adForm, 'ad-form--disabled');
    activateForm(filterForm, 'map__filters--disabled');
  })
  .setView(
    {
      lat: TOKIO_COORDINATES.lat,
      lng: TOKIO_COORDINATES.lng,
    }
    , 12);


L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);

const pointIcon = L.icon({
  iconUrl: '/leaflet/images/marker-icon-2x.png',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
  shadowUrl: '/leaflet/images/marker-shadow.png',
  shadowSize: [82, 52],
  shadowAnchor: [26, 52],
});

const point = L.marker(
  {
    lat: 35.671797,
    lng: 139.766285,
  },
  {
    draggable: true,
    icon: pointIcon,
  },
).on('moveend', (evt) => {
  const lat = String(evt.target._latlng.lat).slice(0, 8);
  const lng = String(evt.target._latlng.lng).slice(0, 9);
  addressInput.value = `${lat} ${lng}`;
});

point.addTo(map);

similarAdsArray.forEach((ad) => {
  const pointIconSimilar = L.icon({
    iconUrl: '/leaflet/images/marker-icon.png',
    iconSize: [40, 40],
    iconAnchor: [20, 40],
    shadowUrl: '/leaflet/images/marker-shadow.png',
    shadowSize: [70, 40],
    shadowAnchor: [20, 40],
  });

  const pointSimilar = L.marker(
    {
      lat: ad.location.lat,
      lng: ad.location.lng,
    },
    {
      draggable: false,
      icon: pointIconSimilar,
    },
  );
  pointSimilar.addTo(map);
  pointSimilar.bindPopup(drowCard(ad));
});
