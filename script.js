var musicPlayer = document.getElementById("musicPlayer");
var playPauseBtn = document.getElementById("playPauseBtn");
var volumeControl = document.getElementById("volumeControl");
var progressBar = document.getElementById("progressBar");
var currentTimeDisplay = document.getElementById("currentTime");
var durationDisplay = document.getElementById("duration");
var audioSource = document.getElementById("audioSource");
var songList = document.getElementById("songList");


var songs = [
    { name: "01 -amor-de-motel", file: "./01 -amor-de-motel.mp3" },
    { name: "02 -bebo-pra-esquecer", file: "./02 -bebo-pra-esquecer.mp3" },
    { name: "03 -boa-de-cama", file: "./03 -boa-de-cama.mp3" },
    { name: "04 -carta-marcada", file: "./04 -carta-marcada.mp3" },
    { name: "05 -eu-vou-te-mostrar", file: "./05 -eu-vou-te-mostrar.mp3" },
    { name: "06 -garota-da-loja", file: "./06 -garota-da-loja.mp3" },
    { name: "07 -guipeca", file: "./07 -guipeca.mp3" },
    { name: "08 -linda-rainha", file: "./08 -linda-rainha.mp3" },
    { name: "09 -lua-parceira", file: "./09 -lua-parceira.mp3" },
    { name: "10 -meu-heroi", file: "./10 -meu-heroi.mp3" },
    { name: "11 -petalas-de-prata", file: "./11 -petalas-de-prata.mp3" },
    { name: "12 -qual-e", file: "./12 -qual-e.mp3" },
    { name: "13 -tic-tac-do-relogio", file: "./13 -tic-tac-do-relogio.mp3" },
    { name: "14 -toma-juizo", file: "./14 -toma-juizo.mp3" },

];    

var currentIndex = 0;

// Inicialização com a primeira música
audioSource.src = songs[currentIndex].file;
musicPlayer.load();

function playPause() {
    if (musicPlayer.paused) {
    musicPlayer.play();
    playPauseBtn.innerHTML = "Pause";
    } else {
    musicPlayer.pause();
    playPauseBtn.innerHTML = "Play";
    }
}

function setVolume() {
    musicPlayer.volume = volumeControl.value / 100;
}

function changeSong() {
    currentIndex = songList.selectedIndex;
    audioSource.src = songs[currentIndex].file;
    musicPlayer.load();
  playPause(); // Inicia automaticamente a nova música
}

function updateProgressBar() {
    var currentTime = musicPlayer.currentTime;
    var duration = musicPlayer.duration;

    var currentTimeMinutes = Math.floor(currentTime / 60);
    var currentTimeSeconds = Math.floor(currentTime % 60);
    currentTimeDisplay.innerHTML = currentTimeMinutes + ":" + (currentTimeSeconds < 10 ? "0" : "") + currentTimeSeconds;

    var durationMinutes = Math.floor(duration / 60);
    var durationSeconds = Math.floor(duration % 60);
    durationDisplay.innerHTML = durationMinutes + ":" + (durationSeconds < 10 ? "0" : "") + durationSeconds;

    var progress = (currentTime / duration) * 100;
    progressBar.value = progress;
};

function playNextSong() {
    currentIndex = (currentIndex + 1) % songs.length;
    audioSource.src = songs[currentIndex].file;
    musicPlayer.load();
    musicPlayer.play();
    playPauseBtn.innerHTML = "Pause";
    songList.selectedIndex = currentIndex;
}

musicPlayer.addEventListener("timeupdate", updateProgressBar);
musicPlayer.addEventListener("ended", playNextSong);
