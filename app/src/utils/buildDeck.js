import {CONSTANTS} from "../constants"
import CardData from "../components/Card/CardData";
import shuffle from "./shuffle";

export default () => {
    const cards = [];

    while (cards.length < CONSTANTS.cardNumber){
        const card = new CardData(CONSTANTS.icons[cards.length]);
        cards.push(card)
        cards.push(card.clone())
    }

    return shuffle(cards)
}