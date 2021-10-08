export default class Timer{
    constructor() {
        this.interval;
    }

    start(i) {
        this.interval = setInterval(function() {
            document.querySelector(".timer").innerHTML = i;
            i===0 ? clearInterval(this.interval) : i--;
        }, 1000);
    }

    reset() {
        clearInterval(this.interval)
    }
}