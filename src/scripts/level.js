const randomWord = require('random-words')

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

        for (let i = 0; i < 6; i++) {
            result.push(randomWord());
        }
        return result;
    }

    won() {
        return this.answer.length === 0;
    }
}
