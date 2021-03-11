import React from "react";
import Card from "../Card/Card"
import "./CardBoard.css"
import contains from "../../utils/contains";

export default class CardBoard extends React.Component {
    render() {
        return (
            <div className={"cardBoard"}>
                {
                    this.props.deck.map((card, index) => {
                        const isBeingCompared = contains(this.props.selectedGroup, card);
                        return <Card
                            key={index}
                            beingCompared = {isBeingCompared}
                            wasGuessed={card.wasGuessed}
                            selectCard={() => this.props.selectCard(card)}
                        />
                    })
                }
            </div>
        )
    }
}