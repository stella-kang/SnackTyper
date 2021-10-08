export default class Timer{
    constructor() {
        this.interval;
    }

    start(i) {
        document.querySelector(".timer").innerHTML = i;
        i--;
        this.interval = setInterval(function() {
            document.querySelector(".timer").innerHTML = i;
            i--;
            // debugger
        }, 1000);
    }

    reset() {
        clearInterval(this.interval)
    }
}