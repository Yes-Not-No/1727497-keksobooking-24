import {getRandomInteger, getRandomFractional} from './random-generator.js';

const TYPE = ['palace', 'flat', 'house', 'bungalow', 'hotel'];
const TIME = ['12:00', '13:00', '14:00'];
const FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const PHOTOS_URL = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg',
];
const LAT_MIN = 35.65000;
const LAT_MAX = 35.70000;
const LNG_MIN = 139.70000;
const LNG_MAX = 139.80000;
const LAT_LNG_LENGTH = 5;

function setFeatures(featutesList){
  const features = [];
  features.push(featutesList[getRandomInteger(0, 5)]);
  for(let it = 0; it < 6; it++) {
    const randomDigit = getRandomInteger(0, 5);
    if(features.includes(featutesList[randomDigit])){
      continue;
    } else {
      features.push(featutesList[randomDigit]);
    }
  }
  return features;
}

function setPhotos(photosList){
  const photos = [];
  photos.push(photosList[getRandomInteger(0, 2)]);
  for(let it = 0; it < 3; it++) {
    const randomDigit = getRandomInteger(0, 2);
    if(photos.includes(photosList[randomDigit])){
      continue;
    } else {
      photos.push(photosList[randomDigit]);
    }
  }
  return photos;
}

function createObjectSimilarAds(avatarId, price, type, rooms, guests, checkin, checkout, features, photos, lat, lng) {
  const latCalculated = lat;
  const lngCalculated = lng;

  const similarAd = {
    author: {
      avatar: `img/avatars/user${avatarId}.png`,
    },
    offer: {
      title: 'Вам подойдет',
      address: `${latCalculated}, ${lngCalculated}`,
      price,
      type,
      rooms,
      guests,
      checkin,
      checkout,
      features,
      description: 'Сдержанные, с изящным декором фасады выполнены с использованием высококачественной штукатурки и природного камня.',
      photos,
    },
    location: {
      lat,
      lng,
    },
  };

  return similarAd;
}

function createObjectsSimilarAdsArray() {
  const ads = [];

  for(let it = 0; it < 10; it++){
    ads.push(
      createObjectSimilarAds(
        getRandomInteger(1, 10),
        getRandomInteger(1000000, 10000000),
        TYPE[getRandomInteger(0, 4)],
        getRandomInteger(1, 5),
        getRandomInteger(1, 3),
        TIME[getRandomInteger(0, 2)],
        TIME[getRandomInteger(0, 2)],
        setFeatures(FEATURES),
        setPhotos(PHOTOS_URL),
        getRandomFractional(LAT_MIN, LAT_MAX, LAT_LNG_LENGTH),
        getRandomFractional(LNG_MIN, LNG_MAX, LAT_LNG_LENGTH),
      ),
    );
  }

  return ads;
}

export {TYPE, TIME, FEATURES, PHOTOS_URL, LAT_MIN, LAT_MAX, LNG_MIN, LNG_MAX, LAT_LNG_LENGTH, setFeatures, setPhotos, createObjectSimilarAds, createObjectsSimilarAdsArray};
