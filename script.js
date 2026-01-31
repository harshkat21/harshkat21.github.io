const tracks = [
  {
    title: "Daydream",
    src: "https://archive.org/details/daydream_202601"
  }
];

let sound;

function playTrack(index) {
  if (sound) sound.stop();

  sound = new Howl({
    src: [tracks[index].src],
    html5: true
  });

  document.getElementById("track-name").innerText = tracks[index].title;
  sound.play();
}

function pauseTrack() {
  if (sound) sound.pause();
}
