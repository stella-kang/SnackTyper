const randomWord = require('random-words')

class Level {
    constructor(num) {
        this.strings = this.buildStrings(num);
    }

    buildStrings(num) {
        if (num < 3) return [randomWord()];
        let next = this.buildStrings(num-2).push(randomWord())
        return next;
    }
}

module.exports = Level;