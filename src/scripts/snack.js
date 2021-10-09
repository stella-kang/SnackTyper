import Level from "./level"

const snacks = ["kimbap", "icecream", "sandwich", "pie", "dumpling", "taco"];
export default class Snack {
    constructor(level) {
        this.level = level;
        // this.snacks = ["kimbap", "icecream", "sandwich", "pie", "dumpling", "taco"];

        this.makeKeys();
    }

    makeKeys() {
        this.keys = [];
        const unique = [];

        this.level.answer.forEach(el => {
            if (!unique.includes(el)) unique.push(el);
        })

        for (let i = 0; i < unique.length; i++) {
            this.keys.push([snacks[i], unique[i]])
        }
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
            document.querySelector(".key").appendChild(ul);
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
            let ul = document.querySelector(".request");
            ul.appendChild(li);
        })
    }

    addImages() {
        snacks.forEach(el => {
            let elements = document.querySelectorAll(`#${el}`);
            for (let i = 0; i < elements.length; i++) {
                let img = document.createElement("img")
                if (elements[i].id === "kimbap") {
                    img.src = "./dist/assets/kimbap.png"
                } else if (elements[i].id === "icecream") {
                    img.src = "./dist/assets/icecream.png"
                } else if (elements[i].id === "sandwich") {
                    img.src = "./dist/assets/sandwich.png"
                } else if (elements[i].id === "pie") {
                    img.src = "./dist/assets/pie.png"
                } else if (elements[i].id === "dumpling") {
                    img.src = "./dist/assets/dumpling.png"
                } else if (elements[i].id === "taco") {
                    img.src = "./dist/assets/taco.png"
                };
                elements[i].appendChild(img);
            }
        })
    }
}
