const randomWord = require('random-words')

class Level {
    constructor(num) {
        this.strings = this.buildStrings(num);
        this.answer = []

        while (this.answer.length < this.strings.length) {
            let randomString = strings[Math.floor(Math.random() * this.strings.legnth)]
            this.answer.push(randomString);
        }
    }

    buildStrings(num) {
        if (num < 3) return [randomWord()];
        let next = this.buildStrings(num-2)
        let updated = false
        while (!updated) {
            let random = randomWord();
            if (!next.includes(random)) {
                next.push(random)
                updated = true;
            }
        }
        return next;
    }
}

module.exports = Level;