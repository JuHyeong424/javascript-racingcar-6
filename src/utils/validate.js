export async function validateCarName(carName) {
  const carNameArray = carName.split(',');

  if (!carNameArray) {
    throw new Error('[ERROR]자동차 이름을 잘못 입력했습니다. 쉼표로 구분해주세요.');
  }

  for (let name of carNameArray) {
    if (name.length > 5) {
      throw new Error('[ERROR]자동차 이름은 최대 5글자 입니다. 다시 작성해주세요.');
    }
  }
}

export async function validateTryCount(tryCount) {
  const tryCountInteger = Number(tryCount);

  if (!Number.isInteger(tryCountInteger)) {
    throw new Error('[ERROR]실행 횟수가 정수가 아닙니다. 정수를 입력해주세요.');
  }

  if (tryCountInteger === 0) {
    throw new Error('[ERROR]실행 횟수가 0입니다. 0보다 큰 숫자를 입력해주세요.');
  }

  if (tryCountInteger < 0) {
    throw new Error('[ERROR]실행 횟수가 음수입니다. 양수를 입력해주세요.');
  }
}