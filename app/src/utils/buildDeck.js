import {CONSTANTS} from "../constants"

export default () => {
    const cards = [];

    while (cards.length < CONSTANTS.cardNumber){
        const card =  {
            wasGuessed: false
        }
        cards.push(card)
    }

    return cards
}