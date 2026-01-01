import {Random} from "@woowacourse/mission-utils";

function setWinner(carNameArray, forwardArray, tryCount) {
  let winner = [];

  let max = forwardArray[tryCount - 1][0].length;

  for (let i = 0; i < carNameArray.length; i++) {
    if (forwardArray[tryCount - 1][i].length > max) {
      max = forwardArray[tryCount - 1][i].length;
    }
  }

  let maxIndex = 0;
  for (let i = 0; i < carNameArray.length; i++) {
    if (max === forwardArray[tryCount - 1][i].length) {
      maxIndex = i;
      winner.push(carNameArray[i]);
    }
  }

  return winner;
}

export async function getResult(carName, tryCount) {
  let random;
  const carNameArray = carName.split(',');
  const forwardArray = Array.from(new Array(Number(tryCount)), () => new Array(carNameArray.length).fill(''));

  for (let j = 0; j < tryCount; j++) {
    for (let i = 0; i < carNameArray.length; i++) {
      random = Random.pickNumberInRange(0, 9);

      if (j === 0 && random >= 4) {
        forwardArray[j][i] = '-';
      }

      if (j >= 1 && random >= 4) {
        forwardArray[j][i] = forwardArray[j - 1][i] + '-';
      }
      if (j >= 1 && random < 4) {
        forwardArray[j][i] = forwardArray[j - 1][i];
      }

      forwardArray[j][i].replace(/^\s+|\s+$/g, "");
    }
  }

  const winner = setWinner(carNameArray, forwardArray, tryCount);

  return [carNameArray, forwardArray, winner];
}