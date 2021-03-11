export default class CardData {
    constructor() {
        this.viewer = null;
        this.wasGuessed = false;
        this.beingCompared = false;
    }

    setBeingCompared(value){
        this.beingCompared = value;
        this.wasChanged();
    }

    setWasGuessed(value){
        this.wasGuessed = value;
        this.wasChanged();
    }

    wasChanged() {
        if (this.viewer)
            this.viewer.dataWasChanged();
    }
}