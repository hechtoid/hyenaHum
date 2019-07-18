
// console.log(audio.paused);
// audio.muted=true
// setInterval(function(){console.log(audio.paused)}, 1000)
// audio.loop=false
// console.log(audio.seekable)

var oneAudio = document.getElementById("one-audio");
var oneSeek = document.getElementById("one-seek");

setTimeout(function(){oneAudio.play()}, 3000)
oneAudio.loop=true

function oneMaxDurSet(){ oneSeek.max = oneAudio.duration}
function oneDurSet(){oneSeek.value = oneAudio.currentTime}
function oneSeekSet(){oneAudio.currentTime = oneSeek.value}
// function oneDurReSet(){oneSeek.value = oneAudio.currentTime}
function onePlay(){oneAudio.play()}
function oneStop(){oneAudio.pause(); oneAudio.currentTime=0;}