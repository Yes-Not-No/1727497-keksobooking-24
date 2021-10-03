function getRandomInteger(min, max) {

  //Проверка на отрицательные значения

  let positiveMin = min >= 0 ? min : min * -1;
  let positiveMax = max >= 0 ? max : max * -1;

  //Проверка 'max > min'

  if ( positiveMin > positiveMax ) {

    const container = positiveMax;
    positiveMax = positiveMin;
    positiveMin = container;
  }

  //Проверка 'max === min'

  if ( positiveMin === positiveMax ) {

    positiveMax++;
  }

  return Math.round( Math.random() * (positiveMax - positiveMin) + positiveMin );
}

function getRandomFractional(min, max, length) {

  //Проверка на отрицательные значения

  let positiveMin = min >= 0 ? min : min * -1;
  let positiveMax = max >= 0 ? max : max * -1;

  //Проверка 'max > min'

  if ( positiveMin > positiveMax ) {

    const container = positiveMax;
    positiveMax = positiveMin;
    positiveMin = container;
  }

  //Проверка 'max === min'

  if ( positiveMin === positiveMax ) {

    positiveMax++;
  }

  const randomInt = String( Math.random() * (positiveMax - positiveMin) + positiveMin ).split('.');
  randomInt[1] = randomInt[1].substr(0, length);

  return Number( randomInt.join('.') );
}

getRandomInteger(1, -100);
getRandomFractional(1.2, 1.25, 3);
