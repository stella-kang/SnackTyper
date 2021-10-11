export default class Input {
    constructor(level) {
        this.level = level;
    }

    checkInput(arg) {
        let correct = false;
        if (this.level.answer.includes(arg)) {
            correct = true;
            let index = this.level.answer.indexOf(arg);
            this.level.answer.splice(index, 1);
        }
        return correct;
    }

}
