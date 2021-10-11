import Game from "./scripts/game"

document.addEventListener("DOMContentLoaded", function() {
    const game = new Game();
    game.render();
    game.addListenerForStart();

    //add event listener to restart the game
})