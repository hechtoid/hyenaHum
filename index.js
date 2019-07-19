// console.log(audio.paused);
// audio.muted=true
// setInterval(function(){console.log(audio.paused)}, 1000)
// audio.loop=false
// console.log(audio.seekable)
// setTimeout(function(){oneAudio.play()}, 3000)

var oneAudio = document.getElementById("one-audio");
var oneDiv = document.getElementById("one-div");
var oneSeek = document.getElementById("one-seek");
var oneVol = document.getElementById("one-vol");
// var oneSelector = document.getElementById("one-selector");
var oneSelector = document.getElementsByClassName("sound-selector")[0]

console.log(oneSelector.value);

function onePlay(){
    oneAudio.play();
    oneDiv.classList.add("playing")
}
function oneStop() { 
    oneAudio.pause(); 
    oneAudio.currentTime = 0; 
    oneDiv.classList.remove("playing")
}

function oneMaxDurSet(){oneSeek.max = oneAudio.duration;}
function oneDurSet(){oneSeek.value = oneAudio.currentTime};
function oneSeekSet(){oneAudio.currentTime = oneSeek.value;}
function oneReSet(){oneAudio.play(); oneSeek.value = oneAudio.currentTime;}

function oneVolumeSet(){oneAudio.volume = oneVol.value;}

setInterval(function(){console.log(oneSelector.value)}, 1000)

function oneSelect(){oneAudio.src = oneSelector.value; onePlay();}
function alertUpload(){alert("Coming Soon!!")}