import Level from "./level"
import Snack from "./snack"
import Input from "./input"
import Timer from "./timer"

export default class Game {
    constructor() {
        this.levelNum = 1
        this.level = new Level(this.levelNum)
        this.snacks = new Snack(this.level);
        this.inputs = new Input(this.level);
        this.score = 0;
        this.strikes = 0;
        this.timer = new Timer();
        this.intervalCallback = this.nextLevel.bind(this);
    }

    start() {
        this.render();
        this.addListenerForInput();
        this.eventTimer = setInterval(this.intervalCallback, 5000)
        this.timer.start(5);
    }

    addListenerForInput() {
        const input = document.querySelector("#input-form")
        let that = this;
        input.addEventListener("submit", e => {
            e.preventDefault();
            that.inputs.checkInput(e.target.elements.value.value);
            if (that.level.won()) {
                clearInterval(that.eventTimer);
                that.timer.reset();
                that.eventTimer = setInterval(that.intervalCallback, 5000);
                that.nextLevel();
            }
        })
    }

    nextLevel() {
        if (this.level.won()) {
            this.score += 1;
        } else {
            this.strikes += 1;
        }
        let requestChildren = document.querySelector(".request").children
        let keyChildren = document.querySelector(".key").children
        for (let i = 0; i < requestChildren.length; i++) {
            requestChildren[i].remove();
        } 
        for (let i = 0; i < keyChildren.length; i++) {
            keyChildren[i].remove();
        }
        this.levelNum += 1
        this.level = new Level(this.levelNum);
        this.snacks = new Snack(this.level);
        this.inputs = new Input(this.level);
        this.timer.reset();
        this.timer = new Timer();
        this.timer.start(5);
        this.render();
    }

    gameOver() {
        this.strikes === 3;
    }

    render() {
        this.snacks.renderKeys();
        this.snacks.renderOrder();
        this.snacks.addImages();
        this.renderStrikes();
        this.renderLevel();
    }

    renderStrikes() {
        let counter = document.querySelector(".strike-count")
        counter.innerHTML = `Strikes: ${this.strikes}`
    }

    renderLevel() {
        let counter = document.querySelector(".level-count")
        counter.innerHTML = `Level: ${this.levelNum}`
    }
}
