import React from "react";
import CardBoard from "../CardBoard/CardBoard";
import "./App.css"
import buildDeck from "../../utils/buildDeck";
import contains from "../../utils/contains";
import cardAreSame from "../../utils/cardAreSame";
import {CONSTANTS} from "../../constants"
import Header from "../Header/Header";
import Counter from "../Header/Counter";


export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            deck: buildDeck(),
            isComparing: false,
        }

        this.counter = new Counter();
        this.selectedGroup = [];
    }

    selectCard(card){

        if ( this.canSelect(card) ) {
            this.selectCardInData(card);

            if (this.selectedGroup.length > 1){
                this.setState(() => { return {isComparing: true}})
                this.counter.incrementCount();

                if (cardAreSame(this.selectedGroup)){
                    this.markCardsGuessed();
                    this.setState(() => { return {isComparing: false}})
                    this.checkGameEnded();
                } else  {
                    setTimeout(() => {
                        this.unselectCards()
                        this.setState(() => { return {isComparing: false}})
                    }, CONSTANTS.comparisonDelay);
                }
            }
        }
    }

    canSelect(card){
        return !contains(this.selectedGroup, card)   // Si la carta no estaba seleccionada
            && !this.state.isComparing                  // Si no estoy comparando otras cartas
            && !card.wasGuessed                       // La carta no ha sido adivinada
    }

    selectCardInData(card){
        card.setBeingCompared(true);
        this.selectedGroup.push(card)
    }

    unselectCards(){
        while (this.selectedGroup.length > 0) {
            const poppedCard = this.selectedGroup.pop();
            poppedCard.setBeingCompared(false);
        }
    }

    markCardsGuessed(){
        while (this.selectedGroup.length > 0) {
            const poppedCard = this.selectedGroup.pop();
            poppedCard.setWasGuessed(true);
            poppedCard.setBeingCompared(false);
        }
    }

    checkGameEnded() {
        let gameEnded = true;
        for (let i = 0; i < this.state.deck.length && gameEnded; i++) {
            gameEnded = this.state.deck[i].wasGuessed;
        }

        if (gameEnded){
            alert(`¡Felicidades! ¡Has ganado en tan solo ${this.counter.count} intentos!`)
        }
    }

    render() {
        return (
            <div className={"App"}>
                <Header counter={this.counter}/>
                <CardBoard
                    deck={this.state.deck}
                    selectCard={(card) => this.selectCard(card)}
                />
            </div>
        )
    }
}
