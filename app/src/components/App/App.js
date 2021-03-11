import React from "react";
import CardBoard from "../CardBoard/CardBoard";
import "./App.css"
import buildDeck from "../../utils/buildDeck";
import contains from "../../utils/contains";


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
            if (contains(this.state.selectedGroup, card)){
                while (this.state.selectedGroup.length > 0){
                    const poppedCard = this.state.selectedGroup.pop();
                    poppedCard.setBeingCompared(false);
                }
            }
            else {
                this.state.selectedGroup.push(card);
                card.setBeingCompared(true);
            }
        })
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
