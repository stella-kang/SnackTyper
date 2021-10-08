import Level from "./level"
import Snack from "./snack"
import Input from "./input"

export default class Game {
    constructor() {
        this.levelNum = 1
        this.level = new Level(this.levelNum)
        this.snacks = new Snack(this.level);
        this.inputs = new Input(this.level);
        this.score = 0;
        this.strikes = 0;
        this.intervalCallback = this.nextLevel.bind(this);
    }

    start() {
        this.render();
        this.addListenerForInput();
        this.timer = setInterval(this.intervalCallback, 5000)
        // if (this.inputs.levelWon()) {
        //     clearInterval(timer);
        //     this.nextLevel();
        //     timer = setInterval(this.intervalCallback, 5000);
        // }
    }

    addListenerForInput() {
        const input = document.querySelector("#input-form")
        let that = this;
        input.addEventListener("submit", e => {
            e.preventDefault();
            that.inputs.checkInput(e.target.elements.value.value);
            if (that.level.won()) {
                clearInterval(that.timer);
                that.nextLevel();
                that.timer = setInterval(that.intervalCallback, 5000);
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
        this.render();
    }

    gameOver() {
        this.strikes === 3;
    }

    render() {
        this.snacks.renderKeys();
        this.snacks.renderOrder();
        this.snacks.addImages();
    }
}
