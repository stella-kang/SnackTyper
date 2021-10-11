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
        this.addListenerForInput();
        this.eventTimer = setInterval(this.intervalCallback, 10000)
        this.timer.start(10);
    }

    addListenerForStart() {
        const startButton = document.querySelector("#start-button")
        const splash = document.querySelector(".game-start")
        const gameBoard = document.querySelector(".game-board")
        let that = this;
        startButton.addEventListener("submit", e => {
            e.preventDefault();
            that.start();
            splash.classList.add("hidden");
            gameBoard.classList.remove("greyout");
        })
    }

    addListenerForInput() {
        const input = document.querySelector("#input-form")
        let that = this;
        input.addEventListener("submit", e => {
            e.preventDefault();
            let val = e.target.elements.value.value
            if (that.inputs.checkInput(val)) {
                that.snacks.keys.forEach(el => {
                    if (el[1] === val) {
                        let li = document.querySelector(`#${el[0]}`)
                        li.remove();
                    }
                })
                debugger
            };
            if (that.level.won()) {
                clearInterval(that.eventTimer);
                that.timer.reset();
                that.eventTimer = setInterval(that.intervalCallback, 10000);
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
        // let requestChildren = document.querySelector(".request").children
        // let keyChildren = document.querySelector(".key").children
        // for (let i = 0; i < requestChildren.length; i++) {
        //     requestChildren[0].remove();
        // } 
        // for (let i = 0; i < keyChildren.length; i++) {
        //     keyChildren[0].remove();
        // }
        document.querySelector(".request").innerHTML = '';
        document.querySelector(".key").innerHTML = '';
        this.levelNum += 1
        this.level = new Level(this.levelNum);
        this.snacks = new Snack(this.level);
        this.inputs = new Input(this.level);
        this.timer.reset();
        this.timer = new Timer();
        this.timer.start(10);
        this.render();

        if (this.strikes === 3) {
            this.endGame();
        }
    }

    endGame() {
        clearInterval(this.eventTimer);
        this.timer.reset();
        let splash = document.querySelector(".game-over");
        splash.classList.remove("hidden");
        let score = document.querySelector("#score")
        score.innerText = `Score: ${this.levelNum - 1}`
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
