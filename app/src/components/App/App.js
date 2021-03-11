import React from "react";
import CardBoard from "../CardBoard/CardBoard";
import "./App.css"
import buildDeck from "../../utils/buildDeck";


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
            this.state.selectedGroup.push(card);
        })
    }

    render() {
        return (
            <div className={"App"}>
                <CardBoard
                    deck={this.state.deck}
                    selectedGroup={this.state.selectedGroup}
                    selectCard={(card) => this.selectCard(card)}
                />
            </div>
        )
    }
}
