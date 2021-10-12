
export default class Music {
    constructor() {
        this.music = document.querySelector("#background-music");
        this.music.volume = 0.5;
        this.volume = document.querySelector("#volume");
        this.toggle = document.querySelector("#play-toggle")
        this.playValue = false;
    }

    addEventListeners() {
        this.volume.addEventListener("change", (e) => {
            this.music.volume = e.currentTarget.value / 100;
        })

        this.toggle.addEventListener("click", (e) => {
            if (!this.playValue) {
                this.music.play();
                this.toggle.innerText = "Pause";
                this.playValue = true;
            } else {
                this.music.pause();
                this.toggle.innerText = "Play";
                this.playValue = false;
            }
        })
    }


}