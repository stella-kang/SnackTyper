import Dictionary from "./dictionary"

export default class Level {
    constructor(num) {
        this.strings = this.buildStrings();
        this.answer = []

        while (this.answer.length < num) {
            this.answer.push(this.strings[Math.floor(Math.random() * this.strings.length)]);
        }
    }

    buildStrings() {
        const result = [];

        while (result.length < 6) {
            let word = Dictionary[Math.floor(Math.random() * Dictionary.length)]
            if (word.length < 10) result.push(word);
        }
        return result;
    }

    won() {
        return this.answer.length === 0;
    }
}
