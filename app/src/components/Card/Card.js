import React from "react";
import "./Card.css"
import ReactCardFlip from "react-card-flip";

export default class Carta extends React.Component {
    render() {
        return (
            <div className={"card"} onClick={this.props.selectCard}>
                <ReactCardFlip isFlipped={this.props.beingCompared || this.props.wasGuessed}>
                    <div className={"cardFront"}>
                        Hola
                    </div>

                    <div className={"cardBack"}>
                        Adios
                    </div>

                </ReactCardFlip>
            </div>
        );
    }
}