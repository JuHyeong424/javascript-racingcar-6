import {CarName, TryCount} from "./view/InputView.js";
import {getResult} from "./utils/getResult.js";
import {printRaceResult, printWinner} from "./view/OutputView.js";
import {Console} from "@woowacourse/mission-utils";
import {validateCarName, validateTryCount} from "./utils/validate.js";

class App {
  async play() {
    const carName = await CarName();
    await validateCarName(carName);

    const tryCount = await TryCount();
    await validateTryCount(tryCount);

    const [carNameArray, forwardArray, winner] = await getResult(carName, tryCount);
    await printRaceResult(tryCount, carNameArray, forwardArray);
    await printWinner(winner);
  }
}

export default App;
