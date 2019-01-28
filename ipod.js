// Create your global variables below:
var tracklist = ["Let It Happen", "Nangs", "The Moment", "Yes I'm Changing", "Eventually", "Gossip", "The Less I Know The Better", "Past Life", "Disciples", "'Cause I'm A Man"];
var volLevels = [];

function init() {
	// Your code goes here
  for (i = 10; i < 17; i++) {
    volLevels.push(document.getElementById("v"+i));
  }
};

function volUp() {
	// Your code goes here
}

function volDown() {
	// Your code goes here
}

function switchPlay() {
	// Your code goes here
}

function nextSong() {
	// Your code goes here
}

function prevSong() {
	// Your code goes here
}

function secondsToMs(d) {
    d = Number(d);

    var min = Math.floor(d / 60);
    var sec = Math.floor(d % 60);

    return `0${min}`.slice(-1) + ":" + `00${sec}`.slice(-2);
}

init();
