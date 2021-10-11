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

        const greyedElements = document.querySelectorAll(".greyout")
        greyedElements.forEach(el => {
            el.classList.remove("greyout");
        })

        this.eventTimer = setInterval(this.intervalCallback, 10000)
        this.timer.start(10);
    }

    addListenerForStart() {
        const startButton = document.querySelector("#start-button")
        const splash = document.querySelector(".game-start")
        let that = this;
        startButton.addEventListener("submit", e => {
            e.preventDefault();
            that.start();
            splash.classList.add("hidden");
        })
    }

    addListenerForInput() {
        const input = document.querySelector("#input-form")
        
        let eventCallback = e => {
            e.preventDefault();
            let val = e.target.elements.value.value

            if (this.inputs.checkInput(val)) {
                this.snacks.keys.forEach(el => {
                    if (el[1] === val) {
                        let li = document.querySelector(`#${el[0]}`)
                        li.remove();
                    }
                })
            };
            document.querySelector("#string-input").value = '';
            if (this.level.won()) {
                clearInterval(this.eventTimer);
                this.timer.reset();
                this.eventTimer = setInterval(this.intervalCallback, 10000);
                this.nextLevel();
            }
        }

        this.inputEventCallback = eventCallback.bind(this);

        input.addEventListener("submit", this.inputEventCallback)
    }

    nextLevel() {
        if (this.level.won()) {
            this.score += 1;
        } else {
            this.strikes += 1;
        }

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

        let game = document.querySelector(".game-board");
        game.classList.add("greyout");

        let links = document.querySelector(".links")
        links.classList.add("greyout");

        let score = document.querySelector("#score");
        score.innerText = `Score: ${this.levelNum - 1}`;
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
