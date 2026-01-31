const tracks = [
{
title: "Daydream",
src: "https://archive.org/download/daydream_202601/daydream.mp3?download=1"
}
];


let audio = new Audio();
audio.preload = "none";


audio.addEventListener("play", startReels);
audio.addEventListener("pause", stopReels);
audio.addEventListener("ended", stopReels);


const player = document.getElementById("player");
const nowPlaying = document.getElementById("nowPlaying");
const progress = document.getElementById("progress");
const currentTimeEl = document.getElementById("current-time");
const durationEl = document.getElementById("duration");


function openPlayer(index) {
audio.pause();
audio.src = tracks[index].src;
audio.load();


nowPlaying.innerText = tracks[index].title;
player.classList.add("active");


audio.play();
}


function togglePlay() {
if (audio.paused) audio.play();
else audio.pause();
}


function stopTrack() {
audio.pause();
audio.currentTime = 0;
}


audio.addEventListener("loadedmetadata", () => {
durationEl.innerText = formatTime(audio.duration);
});


audio.addEventListener("timeupdate", () => {
if (!audio.duration) return;
const percent = (audio.currentTime / audio.duration) * 100;
progress.value = percent;
currentTimeEl.innerText = formatTime(audio.currentTime);
});


progress.addEventListener("input", () => {
if (!audio.duration) return;
audio.currentTime = (progress.value / 100) * audio.duration;
});


function formatTime(sec) {
const m = Math.floor(sec / 60);
const s = Math.floor(sec % 60).toString().padStart(2, "0");
return `${m}:${s}`;
}


function startReels() {
document.querySelectorAll('.reel').forEach(r => r.classList.add('spinning'));
}


function stopReels() {
document.querySelectorAll('.reel').forEach(r => r.classList.remove('spinning'));
}