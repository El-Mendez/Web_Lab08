import React from "react";
import "./Card.css"
import ReactCardFlip from "react-card-flip";

export default class Carta extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            wasGuessed: this.props.wasGuessed,
            beingCompared: this.props.beingCompared,
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        e.preventDefault();
        this.setState(prevState => ({ beingCompared: !prevState.beingCompared }));
        this.props.selectCard();
    }

    render() {
        return (
            <div className={"card"} onClick={this.handleClick}>
                <ReactCardFlip isFlipped={this.state.beingCompared || this.state.wasGuessed}>
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