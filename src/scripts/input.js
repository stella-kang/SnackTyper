class Input {
    constructor(level) {
        this.level = level;
    }

    checkInput(arg) {
        if (this.level.answer.includes(arg)) {
            let index = this.level.answer.indexOf(arg);
            this.level.answer.splice(index, 1);
        }
    }

    levelWon() {
        this.level.answer.length === 0
    }
}

module.exports = Input;