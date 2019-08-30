// import './noise.js'
let noiseSelector = document.getElementById("noise-selector");

var AudioContext = window.AudioContext || window.webkitAudioContext;


// var gainNode = context.createGain();
// var whiteNoise = context.createWhiteNoise();
// 
// gainNode.gain.value = 1
// context=window.context
// gainNode=window.gainNode
// whiteNoise=window.whiteNoise
context = new AudioContext

window.addEventListener('DOMContentLoaded', (event) => {
    brownNoise = context.createBrownNoise();
    pinkNoise = context.createPinkNoise();
    whiteNoise = context.createWhiteNoise();
    gainNode = context.createGain();
    
    volumeControl = document.querySelector('#volume');
    volumeControl.addEventListener('input', function () {
        gainNode.gain.value = this.value;
    }, false);
});



function noiseSelect() {

    switch (noiseSelector.value) {
        case 'white':
            // volumeControl.value = 0.3
            gainNode.gain.value = 0.3;
            whiteNoise.connect(gainNode).connect(context.destination);
            break;
        case 'pink':
            pinkNoise.connect(gainNode).connect(context.destination);
            break;
        case 'brown':
            brownNoise.connect(gainNode).connect(context.destination);
            break;
        case 'custom':
            oneSound.alertUpload();
            break;
    }
}


function makeWaves() {
    brownNoise = context.createBrownNoise();
    var brownGain = context.createGain();
    brownGain.gain.value = 0.5;
    brownNoise.connect(brownGain);
    
    var lfo = context.createOscillator();
    lfo.frequency.value = 0.4;
    var lfoGain = context.createGain();
    lfoGain.gain.value = 0.5;
    
    lfo.start(0);
    lfo.connect(lfoGain);
    lfoGain.connect(brownGain.gain);
    brownGain.connect(context.destination);
}



// var AudioContext = window.AudioContext || window.webkitAudioContext;
// var context = new AudioContext
// var whiteNoise = context.createWhiteNoise();
// whiteNoise.connect(context.destination);