import React from "react";
import Card from "../Card/Card"
import "./CardBoard.css"

export default class CardBoard extends React.Component {
    render() {
        return (
            <div className={"cardBoard"}>
                {
                    this.props.deck.map((card, index) => {
                        return <Card
                            key={index}
                            selectCard={() => this.props.selectCard(card)}
                            cardData = {card}
                        />
                    })
                }
            </div>
        )
    }
}