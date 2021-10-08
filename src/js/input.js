class Input {
    constructor(level) {
        this.strings = [];
        this.level = level;
    }

    addInput(arg) {
        this.strings.push(arg);
    }

    levelComplete() {
        this.level.strings.length === this.strings.length;
    }

    levelWon() {
        if (!this.levelComplete) return false;
        let win = true;
        this.strings.forEach(el => {
            if (!this.level.strings.includes(el)) win = false;
        })
        return win;
    }
}

module.exports = Input;