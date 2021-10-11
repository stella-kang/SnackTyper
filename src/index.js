import Game from "./scripts/game"

document.addEventListener("DOMContentLoaded", function() {
    function startGame() {
        let game = new Game();
        game.render();
        game.addListenerForStart();
    }

    startGame();

    const restart = document.querySelector("#restart-button")
    debugger
    restart.addEventListener("click", e => {
        e.preventDefault();

        let request = querySelector(".request")
        let key = querySelector(".key")
        for (let i = 0; i < request.length; i++) {
            request[i].remove();
        }
        for (let i = 0; i < key.length; i++) {
            key[i].remove();
        }
        debugger
        startGame();
    })
})