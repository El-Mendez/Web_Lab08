export default class Counter{
    constructor() {
        this.count = 0;
        this.viewers = [];
    }

    incrementCount(){
        this.count++;
        this.viewers.forEach((viewer) => {
            viewer.dataWasChanged();
        })
    }


}