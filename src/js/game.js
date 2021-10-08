const Level = require("./level")
const Snack = require("./snack")
const Input = require("./input")

class Game {
    constructor() {
        this.levelNum = 1
        this.level = new Level(this.levelNum)
        this.snacks = new Snack(this.level);
        this.inputs = new Input(this.level);
        this.score = 0;
        this.strikes = 0;
    }

    start() {
        this.addListenerForInput();
        let timer = setInterval(this.nextLevel(), 10000)
        if (this.inputs.levelComplete()) {
            clearIntervanl(timer);
            this.nextLevel();
            timer = setInterval(this.nextLevel(), 10000);
        }
    }

    addListenerForInput() {
        const input = document.querySelector("#input-form")
        input.addEventListener("submit", e => {
            this.level.push(e.value);
        })
    }

    nextLevel() {
        this.levelNum += 1
        this.level = new Level(this.levelNum);
        this.snacks = new Snack(this.level);
        this.inputs = new Input(this.level);
        if (this.inputs.levelWon()) {
            this.score += 1;
        } else {
            this.strikes += 1;
        }
    }

    gameOver() {
        this.strikes === 3;
    }
}

module.exports = Game;