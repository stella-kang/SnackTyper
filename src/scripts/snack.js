const Level = require("./level")

const snacks = ["kimbap", "icecream", "sandwich", "pie", "dumpling", "taco"];
class Snack {
    constructor(level) {
        this.level = level;

        this.makeKeys();
    }

    makeKeys() {
        this.keys = [];
        this.level.answer.forEach(el => {
            let randomSnack = snacks[Math.floor(Math.random() * snacks.length)]
            this.keys.push([randomSnack, el])
        })
    }

    renderKeys() {
        this.keys.forEach(el => {
            let ul = document.createElement("ul");
            let firstLI = document.createElement("li");
            firstLI.id = el[0];
            let secondLI = document.createElement("li");
            secondLI.innerText = el[1];
            ul.appendChild(firstLI);
            ul.appendChild(secondLI);
            document.querySelector(".request").appendChild(ul);
            add.push(el[0]);
        })
    }

    getOrder() {
        const foods = [];
        this.level.answer.forEach(el1 => {
            this.keys.forEach(el2 => {
                if (el2[1] === el1) {
                    foods.push(el2[0]);
                }
            })
        })
        return foods;
    }

    renderOrder() {
        let foods = this.getOrder();
        foods.forEach(el => {
            let li = document.createElement("li");
            li.id = el;
            let ul = document.querySelector("key");
            ul.appendChild(li);

        })
    }

    addImages() {
        snacks.forEach(el => {
            let elements = document.querySelectorAll(`#${el}`);
            elements.forEach(el => {
                let img = document.createElement("img")
                img.href = [];
                el.appendChild(img)
            })
        })
    }
}

module.exports = Snack;