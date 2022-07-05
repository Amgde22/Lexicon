import {player} from "./player.js"
import * as battleFunctions from "./functions/battleFunctions.js"
import * as cardFunctions from "./functions/cardFunctions.js"

export function battleInit() {
  
  cardFunctions.setDrawPile(player.deck)
  cardFunctions.drawCardsIntoHand()

}
