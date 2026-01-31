const tracks = [
  {
    title: "Daydream",
    src: "http://dn720601.ca.archive.org/0/items/daydream_202601/daydream.mp3"
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
