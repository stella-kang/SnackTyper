const randomWord = require('random-words')

export default class Level {
    constructor(num) {
        this.strings = this.buildStrings();
        this.answer = []

        // if (this.strings.length === 1) {
        //     this.answer.push(this.strings[0]);
        // } else if (this.answer.length < this.strings.length && this.strings.length < 7) {
        //     while (this.answer.length < this.strings.length) {
        //         let randomString = this.strings[Math.floor(Math.random() * this.strings.length)]
        //                 this.answer.push(randomString);
        //             }
        // } else if (this.answer.length < this.strings.length) {
        //     while (this.answer.length < 7) {
        //         let randomString = this.strings[Math.floor(Math.random() * this.strings.length)]
        //         this.answer.push(randomString);
        //     }
        //     while (this.answer.length < this.strings.length) {
        //         this.answer.push(this.answer[Math.floor(Math.random() * this.answer.length)]);
        //     }
        // }

        while (this.answer.length < num) {
            this.answer.push(this.strings[Math.floor(Math.random() * this.strings.length)]);
        }
        debugger
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
