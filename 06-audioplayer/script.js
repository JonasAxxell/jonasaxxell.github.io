// song list in an array
const songsArray = [
  {
    title: "Alan Walker - Fade",
    image: "images/Alan_Walker_Fade.jpg",
    audio: "audio/Alan_Walker_Fade.mp3"
  },
  {
    title: "NCS - Ark",
    image: "images/NCS_Ark.jpg",
    audio: "audio/NCS_Ark.mp3"
  },
  {
    title: "M4SONIC - Weapon",
    image: "images/M4SONIC_Weapon.jpg",
    audio: "audio/M4SONIC_Weapon.mp3"
  }
];

let currentSongIndex = 0;
// reusable elements
const playButton = document.getElementById('playButton');
const muteButton = document.getElementById('muteButton');
const muteIcon = document.getElementById('muteIcon');
const playIcon = document.getElementById('playIcon');
const nextIcon = document.getElementById('nextIcon');
const prevIcon = document.getElementById('prevIcon');
const volumeControl = document.getElementById('volumeControl');
const nowPlaying = document.querySelector('.now-playing p');
const artistCover = document.getElementById('artist-cover');
const audioElement = document.getElementById('audio');
const progressBar = document.getElementById('progressBar');
const progressTime = document.getElementById('progressTime');
const nextButton = document.getElementById('nextButton');
const prevButton = document.getElementById('prevButton');
const playlist = document.getElementById('playlist');

// function to help load the songs info including the cover picture & mp3 file
function loadSong(song) {
  nowPlaying.textContent = `Now playing: ${song.title}`;
  artistCover.src = song.image;
  audioElement.src = song.audio;
  audioElement.addEventListener('loadedmetadata', updateProgress);
}
// updates the progress on the song progress bar
function updateProgress() {
  progressBar.max = audioElement.duration;
  setInterval(() => {
    progressBar.value = audioElement.currentTime;
    const minutes = Math.floor(audioElement.currentTime / 60);
    const seconds = Math.floor(audioElement.currentTime % 60).toString().padStart(2, '0');
    const durationMinutes = Math.floor(audioElement.duration / 60);
    const durationSeconds = Math.floor(audioElement.duration % 60).toString().padStart(2, '0');
    progressTime.textContent = `${minutes}:${seconds} / ${durationMinutes}:${durationSeconds}`;
  }, 1000);
}
// play / pause button function
function togglePlay() {
  if (audioElement.paused) {
    audioElement.play();
    playIcon.src = 'images/video-pause-button.png'; 
  } else {
    audioElement.pause();
    playIcon.src = 'images//play-button.png'; 
  }
}

playButton.addEventListener('click', togglePlay);
// mute button function including switching images when muting/unmuting
function toggleMute() {
  if (audioElement.muted) {
    audioElement.muted = false;
    muteIcon.src = 'images/unmute.png';
  } else {
    audioElement.muted = true;
    muteIcon.src = 'images/mute.png';
  }
}

muteButton.addEventListener('click', toggleMute);
// changes volume
function changeVolume() {
  audioElement.volume = volumeControl.value;
}
// updates volumeLabel with the current % whenever slider is moved
const volumeLabel = document.getElementById('volumeLabel');

function changeVolume() {
  audioElement.volume = volumeControl.value;
  volumeLabel.textContent = `${Math.round(volumeControl.value * 100)}%`; 
}

volumeControl.addEventListener('input', changeVolume);


// Function to handle clicking on the progress bar
function seek(event) {
  const progressBarWidth = progressBar.offsetWidth; // Get the width of the progress bar
  const clickX = event.offsetX; // Get the X coordinate of the click relative to the progress bar
  const duration = audioElement.duration; // Get the duration of the song
  audioElement.currentTime = (clickX / progressBarWidth) * duration; // Set the current time of the song based on where the click occurred
}
// event listeners

playButton.addEventListener('click', togglePlay);
muteButton.addEventListener('click', toggleMute);
volumeControl.addEventListener('input', changeVolume);
progressBar.addEventListener('click', seek); 

loadSong(songsArray[currentSongIndex]);


// function to load the next song
function loadNextSong() {
  currentSongIndex = (currentSongIndex + 1) % songsArray.length;
  loadSong(songsArray[currentSongIndex]);
  audioElement.play();
}
// to load previous song
function loadPrevSong() {
  currentSongIndex = (currentSongIndex - 1 + songsArray.length) % songsArray.length;
  loadSong(songsArray[currentSongIndex]);
  audioElement.play();
}
// next song by click
if (nextButton) {
  nextButton.addEventListener('click', loadNextSong);
}
// previous song by click
if (prevButton) {
  prevButton.addEventListener('click', loadPrevSong);
}



//  render the playlist
function renderPlaylist() {
  playlist.innerHTML = ''; 
  songsArray.forEach((song, index) => {
    const item = document.createElement('div');
    item.textContent = song.title;
    item.classList.add('playlist-item');
    if (index === currentSongIndex) {
      item.classList.add('active'); // highlight current song
    }
    item.addEventListener('click', () => {
      currentSongIndex = index; // update to clicked song
      loadSong(songsArray[currentSongIndex]); // Load new song from the array
      audioElement.play(); // start playing
      updatePlayButton(); // update play button state
      renderPlaylist(); // re-render playlist to highlight current song
    });
    playlist.appendChild(item);
  });
}

//  update play button icon
function updatePlayButton() {
  playIcon.src = audioElement.paused ? 'images/play-button.png' : 'images/video-pause-button.png';
}

// load the first song and render the playlist initially
loadSong(songsArray[currentSongIndex]);
renderPlaylist();
