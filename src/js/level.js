const randomWord = require('random-words')

class Level {
    constructor(num) {
        // this.strings;

        // if (num < 5) {
        //     while (this.strings.length < 3) {
        //         this.strings.push(randomWord());
        //     }
        // } (num < 10) {
        //     while (this.strings.length < 3) {
        //         this.strings.push(`${randomWord()} ${randomWord()}`)
        //     }
        // }

        this.strings = this.buildStrings(num);
    }

    buildStrings(num) {
        if (num < 3) return [randomWord()];
        let next = this.buildStrings(num-2).push(randomWord())
        return next;
    }
}

module.exports = Level;