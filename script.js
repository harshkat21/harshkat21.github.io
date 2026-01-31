// ===== TRACK LIST =====
const tracks = [
  {
    title: "Daydream",
    src: "https://archive.org/download/daydream_202601/daydream.mp3"
  }
];

// ===== GLOBAL STATE =====
let sound = null;
let currentTrackIndex = null;

// ===== UI HELPERS =====
function startReels() {
  document.getElementById("leftReel").classList.add("spin");
  document.getElementById("rightReel").classList.add("spin");
}

function stopReels() {
  document.getElementById("leftReel").classList.remove("spin");
  document.getElementById("rightReel").classList.remove("spin");
}

// ===== CORE PLAYER LOGIC =====
function openPlayer(index) {
  const player = document.getElementById("player");
  const title = document.getElementById("nowPlaying");

  player.style.display = "flex";
  title.innerText = tracks[index].title;

  // Stop previous track if any
  if (sound) {
    sound.stop();
    sound.unload();
  }

  currentTrackIndex = index;

  // Create & PLAY audio inside user interaction (critical)
  sound = new Howl({
    src: [tracks[index].src],
    html5: true,
    preload: true,
    volume: 1.0,
    onplay: startReels,
    onpause: stopReels,
    onstop: stopReels,
    onend: stopReels
  });

  sound.play(); // MUST be here
}

// ===== CONTROLS =====
function play() {
  if (!sound) return;

  if (!sound.playing()) {
    sound.play();
  }
}

function pause() {
  if (!sound) return;
  sound.pause();
}

function closePlayer() {
  if (sound) {
    sound.stop();
    sound.unload();
    sound = null;
  }

  stopReels();
  document.getElementById("player").style.display = "none";
}
