import Game from "./scripts/game"

document.addEventListener("DOMContentLoaded", function() {
    let game = new Game();
    game.render();
    game.addListenerForStart(); 

    const music = document.querySelector("#background-music");
    music.volume = 0.3;
    music.autoplay = true;

    const restart = document.querySelector("#restart-button")
    restart.addEventListener("click", e => {
        e.preventDefault();

        let request = document.querySelector(".request").children
        let key = document.querySelector(".key").children
        let requestLength = request.length;
        let keyLength = key.length;
        for (let i = 0; i < requestLength; i++) {
            request[0].remove();
        }
        for (let i = 0; i < keyLength; i++) {
            key[0].remove();
        }

        let form = document.querySelector("#input-form");
        form.removeEventListener("submit", game.inputEventCallback);

        let input = document.querySelector("#string-input")
        input.value = "";

        let gameOver = document.querySelector(".game-over");
        gameOver.classList.add("hidden");
        
        game = new Game();
        game.render();
        game.start();
    })
})