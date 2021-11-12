import { similarAdsArray } from './data.js';

const templateCard = document.querySelector('#card')
  .content
  .querySelector('article');
const canvas = document.querySelector('#map-canvas');
const fragment = document.createDocumentFragment();
const apartment = {
  palace: 'Дворец',
  flat: 'Квартира',
  house: 'Дом',
  bungalow: 'Бунгало',
  hotel: 'Отель',
};

similarAdsArray.map((element) => {
  const card = templateCard.cloneNode(true);
  const cardTitle = card.querySelector('.popup__title');
  const cardAddress = card.querySelector('.popup__text--address');
  const cardPrice = card.querySelector('.popup__text--price');
  const cardType = card.querySelector('.popup__type');
  const cardGuestsRooms = card.querySelector('.popup__text--capacity');
  const cardCheckInOut = card.querySelector('.popup__text--time');
  const cardFeatures = card.querySelector('.popup__features');
  const cardDescription = card.querySelector('.popup__description');
  const cardPhotos = card.querySelector('.popup__photos');
  const cardAvatar = card.querySelector('.popup__avatar');

  if (element.offer.title) {
    cardTitle.textContent = element.offer.title;
  } else {
    cardTitle.setAttribute('style', 'display: none;');
  }

  if (element.offer.address) {
    cardAddress.textContent = element.offer.address;
  } else {
    cardAddress.setAttribute('style', 'display: none;');
  }

  if (element.offer.price) {
    cardPrice.textContent = `${element.offer.price} ₽/ночь`;
  } else {
    cardPrice.setAttribute('style', 'display: none;');
  }

  if (element.offer.type) {
    cardType.textContent = apartment[element.offer.type];
  } else {
    cardType.setAttribute('style', 'display: none;');
  }

  if (element.offer.rooms && element.offer.guests) {
    cardGuestsRooms.textContent = `${element.offer.rooms} комнаты для ${element.offer.guests} гостей`;
  } else {
    cardGuestsRooms.setAttribute('style', 'display: none;');
  }

  if (element.offer.checkin && element.offer.checkout) {
    cardCheckInOut.textContent = `Заезд после ${element.offer.checkin}, выезд до ${element.offer.checkout}`;
  } else {
    cardCheckInOut.setAttribute('style', 'display: none;');
  }

  if (element.offer.features) {
    cardFeatures.innerHTML = '';
    element.offer.features.forEach((f) => {
      const feature = document.createElement('li');
      feature.classList.add('popup__feature');
      feature.classList.add(`popup__feature--${f}`);
      cardFeatures.appendChild(feature);
    });
  } else {
    cardFeatures.setAttribute('style', 'display: none;');
  }

  if (element.offer.description) {
    cardDescription.textContent = element.offer.description;
  } else {
    cardDescription.setAttribute('style', 'display: none;');
  }

  if (element.offer.photos) {
    cardPhotos.innerHTML = '';
    element.offer.photos.forEach((p) => {
      const photo = document.createElement('img');
      photo.setAttribute('src', String(p));
      photo.classList.add('popup__photo');
      photo.setAttribute('width', '45');
      photo.setAttribute('height', '40');
      photo.setAttribute('alt', 'Фотография жилья');
      cardPhotos.appendChild(photo);
    });
  } else {
    cardPhotos.setAttribute('style', 'display: none;');
  }

  if (element.author.avatar) {
    cardAvatar.setAttribute('src', String(element.author.avatar));
  } else {
    cardAvatar.setAttribute('style', 'display: none;');
  }

  fragment.appendChild(card);
});

canvas.appendChild(fragment);
