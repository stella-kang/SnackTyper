const { includes } = require("core-js/core/array");

class Input {
    constructor(level) {
        this.level = level;
    }

    checkInput(arg) {
        if (this.level.strings.includes(arg)) {
            let index = this.level.strings.indexOf(arg);
            this.level.strings.splice(index, 1);
        }
    }

    levelWon() {
        this.level.strings.length === 0
    }
}

module.exports = Input;