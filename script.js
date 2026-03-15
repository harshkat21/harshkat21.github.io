const tracks = [
{
title: "Daydream",
src: "https://archive.org/download/daydream_202601/daydream.mp3?download=1",
duration: "3:24"
},
{
title: "Heatwave",
src: "https://archive.org/download/heatwave_202603/heatwave.mp3?download=1",
duration: "2:15"
},
{
title: "tbd",
src: "https://www.soundjay.com/misc/sounds/bell-ringing-05.wav",
duration: "2:58"
}
];

let currentTrackIndex = 0;
let audio = new Audio();
audio.preload = "none";
audio.volume = 0.7;

audio.addEventListener("play", startReels);
audio.addEventListener("pause", stopReels);
audio.addEventListener("ended", () => {
stopReels();
nextTrack();
});

const player = document.getElementById("player");
const nowPlaying = document.getElementById("nowPlaying");
const progress = document.getElementById("progress");
const currentTimeEl = document.getElementById("current-time");
const durationEl = document.getElementById("duration");
const volume = document.getElementById("volume");
const playBtn = document.getElementById("playBtn");

function openPlayer(index) {
if (index < 0 || index >= tracks.length) {
console.error("Invalid track index:", index);
return;
}
currentTrackIndex = index;
loadTrack(index);
player.classList.add("active");
audio.play();
updatePlayButton();
}

function loadTrack(index) {
audio.pause();
audio.src = tracks[index].src;
audio.load();
nowPlaying.innerText = tracks[index].title;
}

function togglePlay() {
if (audio.paused) {
audio.play();
} else {
audio.pause();
}
updatePlayButton();
}

function stopTrack() {
audio.pause();
audio.currentTime = 0;
updatePlayButton();
}

function prevTrack() {
currentTrackIndex = (currentTrackIndex - 1 + tracks.length) % tracks.length;
loadTrack(currentTrackIndex);
audio.play();
updatePlayButton();
}

function nextTrack() {
currentTrackIndex = (currentTrackIndex + 1) % tracks.length;
loadTrack(currentTrackIndex);
audio.play();
updatePlayButton();
}

function updatePlayButton() {
const icon = playBtn.querySelector('i');
if (audio.paused) {
icon.className = 'fas fa-play';
} else {
icon.className = 'fas fa-pause';
}
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

volume.addEventListener("input", () => {
audio.volume = volume.value / 100;
});

// Keyboard controls
document.addEventListener('keydown', (e) => {
switch(e.code) {
case 'Space':
e.preventDefault();
togglePlay();
break;
case 'ArrowLeft':
if (e.ctrlKey) prevTrack();
else audio.currentTime = Math.max(0, audio.currentTime - 10);
break;
case 'ArrowRight':
if (e.ctrlKey) nextTrack();
else audio.currentTime = Math.min(audio.duration, audio.currentTime + 10);
break;
}
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

// Initialize
updatePlayButton();