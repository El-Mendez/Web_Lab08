import React from "react";
import CardBoard from "../CardBoard/CardBoard";
import "./App.css"
import buildDeck from "../../utils/buildDeck";
import contains from "../../utils/contains";
import cardAreSame from "../../utils/cardAreSame";


export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            deck: buildDeck(),
            selectedGroup: [],
            isComparing: false,
        }
    }

    selectCard(card){
        this.setState(() => {
            if ( this.canSelect(card) ){
                this.state.selectedGroup.push(card);
                card.setBeingCompared(true);

                if(this.state.selectedGroup.length > 1) {
                    if(cardAreSame(this.state.selectedGroup)){
                        this.markCardGuessed()
                    } else {
                        this.unselectCards();
                    }
                }
            }
        })
    }

    canSelect(card){
        return !contains(this.state.selectedGroup, card)   // Si la carta no estaba seleccionada
            && !this.state.isComparing                  // Si no estoy comparando otras cartas
            && !card.wasGuessed                       // La carta no ha sido adivinada
    }

    unselectCards(){
        while (this.state.selectedGroup.length > 0) {
            const poppedCard = this.state.selectedGroup.pop();
            poppedCard.setBeingCompared(false);
        }
    }

    markCardGuessed(){
        while (this.state.selectedGroup.length > 0) {
            const poppedCard = this.state.selectedGroup.pop();
            poppedCard.setWasGuessed(true);
            poppedCard.setBeingCompared(false);
        }
    }

    render() {
        return (
            <div className={"App"}>
                <CardBoard
                    deck={this.state.deck}
                    selectCard={(card) => this.selectCard(card)}
                />
            </div>
        )
    }
}
