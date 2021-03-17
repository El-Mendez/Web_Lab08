export default class CardData {
  constructor(icon) {
    this.viewer = null;
    this.wasGuessed = false;
    this.beingCompared = false;
    this.icon = icon;
  }

  setBeingCompared(value) {
    this.beingCompared = value;
    this.wasChanged();
  }

  setWasGuessed(value) {
    this.wasGuessed = value;
    this.wasChanged();
  }

  wasChanged() {
    if (this.viewer) { this.viewer.dataWasChanged(); }
  }

  areEqual(card) {
    return this.icon === card.icon;
  }

  clone() {
    return new CardData(this.icon);
  }
}
