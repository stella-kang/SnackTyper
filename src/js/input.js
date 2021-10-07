class Input {
    constructor() {
        this.strings = [];
    }

    addInput(arg) {
        this.strings.push(arg);
    }

    levelComplete(level) {
        level.strings.length === this.strings.length;
    }

    gamePass(level) {
        let pass = true;
        this.strings.forEach(el => {
            if (!level.strings.includes(el)) pass = false;
        })
        return pass;
    }
}