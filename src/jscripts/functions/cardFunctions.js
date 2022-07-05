import {player} from "../player.js"
import * as cardsManager from "../cards/01cardsManager.js"
 

export function setDrawPile(deck) {
  let shuffled_deck = shuffle(deck)

  cardsManager.drawPile = shuffled_deck
  console.log(cardsManager.drawPile);

} 

export function drawCardsIntoHand(draw){
  let bonusDrawBuff = player.buffs.draw ?? 0
  let playerDraw = 5 
    let totalDraw = draw ?? (playerDraw + bonusDrawBuff)

  for(let i = 1 ; i <= totalDraw ; i++ ){

    if(cardsManager.drawPile == 0){
      shuffleDrawPile()
    }

    let drawnCard = cardsManager.drawPile.pop()
    cardsManager.playerHand.push(drawnCard)

  }

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

    export function shuffleDrawPile(){
      // asuming drawPile has 0 cards
      
      let shuffled_discard = shuffle(cardsManager.discardPile)
      cardsManager.drawPile = [...shuffled_discard]
    }