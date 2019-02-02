// Create your global variables below:
var tracklist = ["Let It Happen", "Nangs", "The Moment", "Yes I'm Changing", "Eventually", "Gossip", "The Less I Know The Better", "Past Life", "Disciples", "'Cause I'm A Man"];
var volLevels = [];
var curVol = 3;
var playing = false;
var curSongIndex = tracklist.indexOf("The Less I Know The Better");


function init() {
  // Default constructor

  for (i = 0; i < 6; i++) {
    volLevels.push(document.getElementById("vl" + i));
  }

  for (i=0; i < curVol; i++){
    volLevels[i].style.backgroundColor = "#9f5cc4";
  }
};


function volUp() {
  // Increases volume level if possible

  if ( curVol < 6){
  volLevels[curVol].style.backgroundColor = "#9f5cc4";
  curVol += 1;
  }
}


function volDown() {
  // Decreases volume level  if possible

  if ( curVol > 0){
  volLevels[curVol-1].style.backgroundColor = "white";
  curVol -= 1;
  }
}


document.getElementById('play_stop').onclick = function switchPlay() {
  // Starts and stops the player

  var button = document.getElementById("play_stop");

  // Condition where ipod is not playing yet
	if (playing == false){
    button.innerHTML = "pause";
    playing = true;
    timing = setInterval(moveTime, 1000);
  }
  // Condition where ipod is playing
  else{
    button.innerHTML = "play_arrow";
    playing = false;
    clearInterval(timing);
  }
}


document.getElementById("next").onclick = function nextSong() {
  // Goes to the next song

  // Updating song name
  if (curSongIndex+1 >= tracklist.length){
    curSongIndex = 0;
    document.getElementById("songName").innerHTML = tracklist[curSongIndex];
  }
  else{
    curSongIndex ++;
    document.getElementById("songName").innerHTML = tracklist[curSongIndex];
  }

  // Conditions for paused or not paused
  if (playing == true){
      newSong();
  }
  else{
      document.getElementById("slider").value = 0;
      document.getElementById("elapsedTime").innerHTML = "0:00";
  }
}


document.getElementById("prev").onclick = function prevSong() {
  // Goes to the previous song

  // Updating song name
  if (curSongIndex == 0){
    curSongIndex = tracklist.length - 1;
    document.getElementById("songName").innerHTML = tracklist[curSongIndex];
  }
  else{
    curSongIndex --;
    document.getElementById("songName").innerHTML = tracklist[curSongIndex];
  }

  // Conditions for paused or not paused
  if (playing == true){
      newSong();
  }
  else{
      document.getElementById("slider").value = 0;
      document.getElementById("elapsedTime").innerHTML = "0:00";
  }
}


function secondsToMs(d) {
    // Converts an inteter string to minutes. For example, when the input
    // has a value of 123, the player should display 2:03.

    d = Number(d);

    var min = Math.floor(d / 60);
    var sec = Math.floor(d % 60);

    return `0${min}`.slice(-1) + ":" + `00${sec}`.slice(-2);
}


function moveTime() {
  // Increments the playing slide to show progress in a given song
  var slider = document.getElementById("slider");

  if (slider.value != slider.max){
    slider.value ++;
    document.getElementById("elapsedTime").innerHTML = secondsToMs(slider.value);
  }
  else{
    newSong();
  }
}


function newSong() {
  // Starts a new song - used for all types of "next" song

  var slider = document.getElementById("slider");
  slider.value = 0;
  document.getElementById("elapsedTime").innerHTML = "0:00";
  clearInterval(timing);
  timing = setInterval(moveTime, 1000);
}

init();
