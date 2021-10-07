const randomWord = require('random-words')

class Level {
    constructor() {
        this.score = 1;
        this.strings = []

        while (this.strings.length < this.score) {
            this.strings.push(randomWord());
        }
    }
}