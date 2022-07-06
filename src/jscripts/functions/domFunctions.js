import {player} from "../player.js"
import * as cardsManager from "../cards/01cardsManager.js"
import * as cardFunctions from "../functions/cardFunctions.js"

export const handElement = document.querySelector(".hand")

export function generateCardDomElement(card) {
  let cardElement = document.createElement("div")
  let cardType = cardFunctions.determineCardType(card)
  let cardName = card.name.replaceAll(" " , "")
  
  cardElement.classList.add("card")
  cardElement.classList.add(cardType)
  cardElement.classList.add(cardName)

  cardElement.cardObject = card

  return cardElement
}

export function renderCardIntoHand(card){
  let cardElement = card.element
  handElement.append(cardElement)
}