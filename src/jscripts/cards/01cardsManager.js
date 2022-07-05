import * as attackCardClasses from "./attackCardClasses.js"
import * as skillCardClasses from "./skillCardClass.js"
import * as powerCardClasses from "./powerCardClasses.js"

let drawPile = []
let discardPile = []
const playerStartingDeck = [
  new attackCardClasses.strike(7,1),
  new attackCardClasses.strike(7,1),
  new attackCardClasses.strike(7,1), 
]
export {playerStartingDeck , drawPile , discardPile}