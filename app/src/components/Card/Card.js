import React from "react";
import "./Card.css"
import ReactCardFlip from "react-card-flip";

export default class Carta extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            wasGuessed: this.props.cardData.wasGuessed,
            beingCompared: this.props.cardData.beingCompared,
        }

        this.props.cardData.viewer = this;

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        e.preventDefault();
        this.props.selectCard();
    }

    dataWasChanged(){
        this.setState(() => {
            return {
                wasGuessed: this.props.cardData.wasGuessed,
                beingCompared: this.props.cardData.beingCompared,
            }
        })
    }


    render() {
        return (
            <div className={"card"} onClick={this.handleClick}>
                <ReactCardFlip isFlipped={this.state.beingCompared || this.state.wasGuessed}>
                    <div className={"cardFront"}>
                        <i className={`fas ${this.props.cardData.icon}`}/>
                    </div>

                    <div className={"cardBack"}>
                        Adios
                    </div>

                </ReactCardFlip>
            </div>
        );
    }
}