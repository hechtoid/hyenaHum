// console.log(audio.paused);
// audio.muted=true
// setInterval(function(){console.log(audio.paused)}, 1000)
// audio.loop=false
// console.log(audio.seekable)
// setTimeout(function(){oneAudio.play()}, 3000)

let oneAudio = document.getElementById("one-audio");
let oneDiv = document.getElementById("one-div");
// let oneSeek = document.getElementById("one-seek");
let oneVol = document.getElementById("one-vol");
let oneSelector = document.getElementById("one-selector");
let onePlayButton = document.getElementById("one-play");
let onePauseButton = document.getElementById("one-pause");

//TESTING ONLY
oneAudio.muted = true

function onePlay(){
    oneAudio.play();
    // if (oneAudio.src.includes('none')){
    //     oneDiv.classList.remove("playing")
    //     onePauseButton.classList.add("inactive");
    //     onePlayButton.classList.remove("inactive");
    // } else { 
        oneDiv.classList.add("playing")
        onePlayButton.classList.add("inactive");
        onePauseButton.classList.remove("inactive");
    // }
}
function oneToggle(){
    if (oneAudio.paused && !oneAudio.src.includes('none')){
        oneAudio.play();
        oneDiv.classList.add("playing");
        onePlayButton.classList.add("inactive");
        onePauseButton.classList.remove("inactive");
    } else { 
        oneAudio.pause(); 
        oneDiv.classList.remove("playing");
        onePauseButton.classList.add("inactive");
        onePlayButton.classList.remove("inactive");
    }
}
function onePause() { 
    oneAudio.pause(); 
    oneAudio.currentTime = 0; 
    oneDiv.classList.remove("playing")
}
// function oneCheck() {
//     oneAudio.paused
// }

function oneVolumeSet(){
    oneAudio.muted = false;
    oneAudio.volume = oneVol.value;
}

// setInterval(function () { console.log(oneAudio.volume)}, 1000)
// setInterval(function(){console.log(oneSelector.value)}, 1000)

function oneSelect(){oneAudio.src = oneSelector.value; onePlay();}

function alertUpload() { 
    alert("Coming Soon!!"); 
    oneAudio.pause();
    oneDiv.classList.remove("playing");
    onePauseButton.classList.add("inactive");
    onePlayButton.classList.remove("inactive");
    // oneSelector.value = './assets/sounds/Hyena Long.flac'; 
    // onePlay();
}
    
    // function oneMaxDurSet(){oneSeek.max = oneAudio.duration;}
    // function oneDurSet(){oneSeek.value = oneAudio.currentTime};
    // function oneSeekSet(){oneAudio.currentTime = oneSeek.value; onePlay()}
    // function oneReSet(){oneAudio.play(); oneSeek.value = oneAudio.currentTime;}