import {player} from "../player.js"
import * as cardsManager from "../cards/01cardsManager.js"
import * as cardFunctions from "../functions/cardFunctions.js"

export const handElement = document.querySelector(".hand")
export let selectedCard ;

export function generateCardDomElement(card) {
  let cardElement = document.createElement("div")
  let cardType = cardFunctions.determineCardType(card)
  let cardName = card.name.replaceAll(" " , "")
  
  cardElement.classList.add("card")
  cardElement.classList.add(cardType)
  cardElement.classList.add(cardName)

  cardElement.cardObject = card
  
  selectCardOnClick(cardElement)

  return cardElement
}

export function renderCardIntoHand(card){
  let cardElement = card.element
  handElement.append(cardElement)
}

export function selectCardOnClick(cardElement){

  const cardObject = cardElement.cardObject

  cardElement.addEventListener("pointerdown" , (e)=> {
    selectCard(cardElement)
    cardObject.play()

  })
}
      export function selectCard(cardElement){
        deSelectAllCards()
        cardElement.classList.add("selectedCard")      
        selectedCard = cardElement
      }
      export function deSelectAllCards() {
        let allCards = document.querySelectorAll(".card")
        allCards.forEach(card => {
          card.classList.remove("selectedCard")
        })
        selectedCard = null
      }