export default class Counter {
  constructor() {
    this.count = 0;
    this.viewers = [];
  }

  incrementCount() {
    this.count += 1;
    this.viewers.forEach((viewer) => {
      viewer.dataWasChanged();
    });
  }
}
