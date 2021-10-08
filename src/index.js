const Game = require("./scripts/game")

document.addEventListener("DOMContentLoaded", function() {
    const game = new Game();
    game.start();
})