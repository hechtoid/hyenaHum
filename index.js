// console.log(audio.paused);
// audio.muted=true
// setInterval(function(){console.log(audio.paused)}, 1000)
// audio.loop=false
// console.log(audio.seekable)
// setTimeout(function(){oneAudio.play()}, 3000)

var oneAudio = document.getElementById("one-audio");
var oneSeek = document.getElementById("one-seek");


function onePlay(){oneAudio.play()}
function oneStop(){oneAudio.pause(); oneAudio.currentTime=0;}

function oneMaxDurSet(){ oneSeek.max = oneAudio.duration;}
function oneDurSet(){oneSeek.value = oneAudio.currentTime};
function oneSeekSet(){oneAudio.currentTime = oneSeek.value;}
function oneReSet() { oneAudio.play(); oneSeek.value = oneAudio.currentTime;}