const TITLE_MIN_LENGTH = 30;
const TITLE_MAX_LENGTH = 100;
const MAX_PRICE = 1000000;
const BUNGALOW_MIN_PRICE = 0;
const FLAT_MIN_PRICE = 1000;
const HOTEL_MIN_PRICE = 3000;
const HOUSE_MIN_PRICE = 5000;
const PALACE_MIN_PRICE = 10000;

const adForm = document.querySelector('.ad-form');
const filterForm = document.querySelector('.map__filters');
const formTitle = adForm.querySelector('#title');
const formPrice = adForm.querySelector('#price');
const formType = adForm.querySelector('#type');
const roomNumbersInput = adForm.querySelector('#room_number');
const guestsNumbersInput = adForm.querySelector('#capacity');
const addressInput = adForm.querySelector('#address');
let minPrice;

const setMinPrice = function () {
  switch (formType.value) {
    case 'bungalow': formPrice.setAttribute('min', BUNGALOW_MIN_PRICE);
      minPrice = BUNGALOW_MIN_PRICE;
      break;
    case 'flat': formPrice.setAttribute('min', FLAT_MIN_PRICE);
      minPrice = FLAT_MIN_PRICE;
      break;
    case 'hotel': formPrice.setAttribute('min', HOTEL_MIN_PRICE);
      minPrice = HOTEL_MIN_PRICE;
      break;
    case 'house': formPrice.setAttribute('min', HOUSE_MIN_PRICE);
      minPrice = HOUSE_MIN_PRICE;
      break;
    case 'palace': formPrice.setAttribute('min', PALACE_MIN_PRICE);
      minPrice = PALACE_MIN_PRICE;
  }
};

//Функция деактивации форм на странице
function inactivateForm(formName, disabledClassName) {
  formName.classList.add(disabledClassName);
  formName.querySelectorAll('fieldset')
    .forEach((fieldset) => {
      fieldset.setAttribute('disabled', 'disabled');
    });
}

//Функция активации форм на странице
function activateForm(formName, disabledClassName) {
  formName.classList.remove(disabledClassName);
  formName.querySelectorAll('fieldset')
    .forEach((fieldset) => {
      fieldset.removeAttribute('disabled');
    });
}

inactivateForm(adForm, 'ad-form--disabled');
inactivateForm(filterForm, 'map__filters--disabled');

formTitle.addEventListener('input', () => {
  const titleLength = formTitle.value.length;

  if (titleLength < TITLE_MIN_LENGTH) {
    formTitle.setCustomValidity(`Еще ${TITLE_MIN_LENGTH - titleLength} символов`);
  } else if (titleLength > TITLE_MAX_LENGTH) {
    formTitle.setCustomValidity(`Превышение длины строки на ${titleLength - TITLE_MAX_LENGTH}`);
  } else {
    formTitle.setCustomValidity('');
  }

  formTitle.reportValidity();
});

formPrice.addEventListener('input', () => {
  const priceValue = formPrice.value;

  if (priceValue > MAX_PRICE) {
    formPrice.setCustomValidity(`Максимальная цена за ночь ${MAX_PRICE} рублей`);
  } else if (priceValue < minPrice) {
    formPrice.setCustomValidity(`Для данного типа жилья минимальная цена ${minPrice} рублей`);
  } else {
    formPrice.setCustomValidity('');
  }

  formPrice.reportValidity();
});

setMinPrice();
formType.addEventListener('input', setMinPrice);

roomNumbersInput.addEventListener('input', () => {
  if (roomNumbersInput.value < guestsNumbersInput.value) {
    guestsNumbersInput.value = roomNumbersInput.value;
    roomNumbersInput.setCustomValidity(`Для ${roomNumbersInput.value} комнат(-ы) максимум ${guestsNumbersInput.value} гость(-ей)`);
  }

  if (roomNumbersInput.value === '100') {
    guestsNumbersInput.value = 0;
    roomNumbersInput.setCustomValidity('');
  }

  roomNumbersInput.reportValidity();
});

guestsNumbersInput.addEventListener('input', () => {
  if (guestsNumbersInput.value > roomNumbersInput.value) {
    roomNumbersInput.value = guestsNumbersInput.value;
    guestsNumbersInput.setCustomValidity(`Для ${guestsNumbersInput.value} гость(-ей) минимум ${roomNumbersInput.value} комнат(-ы)`);
  }

  if (guestsNumbersInput.value === '0') {
    roomNumbersInput.value = 100;
    roomNumbersInput.setCustomValidity('');
  }

  guestsNumbersInput.reportValidity();
});

export { activateForm, adForm, filterForm, addressInput };
