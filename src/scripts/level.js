const randomWord = require('random-words')

export default class Level {
    constructor(num) {
        this.strings = this.buildStrings(num);
        this.answer = []

        if (this.strings.length === 1) {
            this.answer.push(this.strings[0]);
        } else if (this.answer.length < this.strings.length && this.strings.length < 7) {
            while (this.answer.length < this.strings.length) {
                let randomString = this.strings[Math.floor(Math.random() * this.strings.length)]
                        this.answer.push(randomString);
                    }
        } else if (this.answers.lngth < this.strings.length) {
            this.answer.push(this.answer[Math.floor(Math.random() * this.answer.length)])
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

    won() {
        return this.answer.length === 0;
    }
}
