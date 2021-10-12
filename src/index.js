import Game from "./scripts/game"
import Music from "./scripts/music"

document.addEventListener("DOMContentLoaded", function() {
    let game = new Game();
    game.render();
    game.addListenerForStart(); 

    let music = new Music();
    music.addEventListeners();
})