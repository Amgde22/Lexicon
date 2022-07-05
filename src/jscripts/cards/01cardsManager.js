import * as attackCardClasses from "./attackCardClasses.js"
import * as skillCardClasses from "./skillCardClass.js"
import * as powerCardClasses from "./powerCardClasses.js"

let drawPile = []
let discardPile = []
let playerHand =  []
const playerStartingDeck = [
  new attackCardClasses.strike(),
  new attackCardClasses.strike(),
  new attackCardClasses.strike(),
  new skillCardClasses.defend(),
  new skillCardClasses.defend(),
  new skillCardClasses.defend(),
  new attackCardClasses.bash(),

]
export {playerStartingDeck , drawPile , discardPile , playerHand}