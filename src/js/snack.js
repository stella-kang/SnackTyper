const Level = require("./level")

const snacks = ["riceball", "dumpling", "chicken", "ramen", "peach", "steak"];
class Snack {
    constructor(level) {
        this.level = level;
    }

    makeKeys() {
        this.keys = [];
        this.level.strings.forEach(el => {
            let randomSnack = snacks[Math.floor(Math.random() * snacks.length)]
            this.keys.push([randomSnack, el])
        })
    }

    render() { 
        this.keys.forEach(el => {
            let ul = document.createElement("ul");
            let firstLI = document.createElement("li");
            firstLI.id = el[0];
            let secondLI = document.createElement("li");
            secondLI.innerText = el[1];
            ul.appendChild(firstLI);
            ul.appendChild(secondLI);
            document.querySelector(".request").appendChild(ul);
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