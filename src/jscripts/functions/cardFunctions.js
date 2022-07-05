import {player} from "../player.js"
import * as cardsManager from "../cards/01cardsManager.js"
 

export function setDrawPile(deck) {
  let shuffled_deck = shuffle(deck)
  deck = shuffled_deck
  return deck  
} 

    export function shuffle(array) {
      let our_array = Array.from(array)
      let shuffled_array = []

      for(let i = 0 ; i < array.length ; i++){
        let random_index = Math.floor(Math.random() * our_array.length )
        shuffled_array.push(...our_array.splice(random_index , 1))
      }

      return shuffled_array
    }