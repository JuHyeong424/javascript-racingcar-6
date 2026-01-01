import {Console} from "@woowacourse/mission-utils";

export async function printRaceResult(tryCount, carNameArray, forwardArray) {
  Console.print('');
  Console.print('실행 결과');

  for (let j = 0; j < tryCount; j++) {
    for (let i = 0 ; i < carNameArray.length; i++) {
      Console.print(`${carNameArray[i]} : ${forwardArray[j][i]}`);
    }
    Console.print('');
  }
}

export async function printWinner(winner) {
  Console.print(`최종 우승자 : ${winner.map(value => value)}`);
}