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
        this.ms = 10000;
        this.time = 10;
    }

    start() {
        this.addListenerForInput();

        const greyedElements = document.querySelectorAll(".greyout")
        greyedElements.forEach(el => {
            el.classList.remove("greyout");
        })

        let input = document.querySelector("#string-input")
        input.focus();

        this.eventTimer = setInterval(this.intervalCallback, this.ms)
        this.timer.start(this.time);
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
                this.nextLevel();
                this.eventTimer = setInterval(this.intervalCallback, this.ms);
                debugger
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
            let dog = document.querySelector("#dog");
            dog.classList.add("animation")
            setTimeout(() => {
                dog.classList.remove("animation")
            }, 500);
        }

        document.querySelector(".request").innerHTML = '';
        document.querySelector(".key").innerHTML = '';
        document.querySelector("#string-input").value = '';
        debugger

        if (this.levelNum % 10 === 9) {
            this.addTime();
        }

        this.levelNum += 1
        this.level = new Level(this.levelNum);
        this.snacks = new Snack(this.level);
        this.inputs = new Input(this.level);
        this.timer.reset();
        this.timer = new Timer();
        this.timer.start(this.time);
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

        let finalScore = this.levelNum-4

        let score = document.querySelector("#score");
        score.innerText = `Score: ${finalScore}`;

        let rank = document.querySelector("#rank")
        rank.innerText = `You're a ${finalScore < 10 ? "Novice Snacker" : finalScore < 20 ? "Intermediate Snacker" : finalScore < 30 ? "Super Snacker" : "Snack Attacker!"}`

        const restart = document.querySelector("#restart-button")
        restart.addEventListener("click", e => {
            e.preventDefault();

            let request = document.querySelector(".request").children
            let key = document.querySelector(".key").children
            let requestLength = request.length;
            let keyLength = key.length;
            for (let i = 0; i < requestLength; i++) {
                request[0].remove();
            }
            for (let i = 0; i < keyLength; i++) {
                key[0].remove();
            }

            let form = document.querySelector("#input-form");
            form.removeEventListener("submit", game.inputEventCallback);

            let input = document.querySelector("#string-input")
            input.value = "";

            let gameOver = document.querySelector(".game-over");
            gameOver.classList.add("hidden");

            game = new Game();
            game.render();
            game.start();
        })
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

    addTime() {
        this.time += 5;
        this.ms += 5000;
    }
}
