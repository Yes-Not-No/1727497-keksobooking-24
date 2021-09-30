const getRandomInt = (min, max, length) => {

  //Проверка на отрицательные значения

  const positiveMin = min >= 0 ? min : min * -1;
  const positiveMax = max >= 0 ? max : max * -1;

  //Проверка 'max > min'

  if ( positiveMin > positiveMax ) {

    const flippedMax = positiveMin;
    const flippedMin = positiveMax;
    const randomInt = String( Math.random() * (flippedMax - flippedMin) + flippedMin ).split('.');
          randomInt[1] = randomInt[1].substr(0, length);

    console.log( Number( randomInt.join('.')) );
    return Number( randomInt.join('.'));
  }

  const randomInt = String( Math.random() * (positiveMax - positiveMin) + positiveMin ).split('.');
        randomInt[1] = randomInt[1].substr(0, length);

  console.log( Number( randomInt.join('.')) );
  return Number( randomInt.join('.'));
}

getRandomInt(-1000, -100, 3)
