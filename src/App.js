import {Console} from "@woowacourse/mission-utils";
import {CarName, TryCount} from "./view/InputView.js";
import {validateCarName, validateTryCount} from "./utils/validate.js";

class App {
  async play() {
    let carName;
    while (true) {
      try {
        carName = await CarName();
        await validateCarName(carName);
        break;
      } catch (e) {
        Console.print(e.message);
      }
    }

    let tryCount;
    while (true) {
      try {
        tryCount = await TryCount();
        await validateTryCount(tryCount);
      } catch (e) {
        Console.print(e.message);
      }
    }
  }
}

export default App;
