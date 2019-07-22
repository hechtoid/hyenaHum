// import './noise.js'
let noiseSelector = document.getElementById("noise-selector");

var AudioContext = window.AudioContext || window.webkitAudioContext;
var context = new AudioContext
// var gainNode = context.createGain();
// var whiteNoise = context.createWhiteNoise();
// 
// gainNode.gain.value = 1
// context=window.context
// gainNode=window.gainNode
// whiteNoise=window.whiteNoise


function noiseSelect() {
    

    switch (noiseSelector.value) {
        case 'none':
            // whiteNoise.disconnect();
            break;
        case 'white':
            var whiteNoise = context.createWhiteNoise();
            whiteNoise.connect(context.destination);
            break;
        case 'pink':
            var pinkNoise = context.createPinkNoise();
            pinkNoise.connect(context.destination);
            break;
        case 'brown':
            var brownNoise = context.createBrownNoise();
            brownNoise.connect(context.destination);
            break;
        case 'custom':
            oneSound.alertUpload();
            break;
        default:
            context.suspend();
    }
}


// var AudioContext = window.AudioContext || window.webkitAudioContext;
// var context = new AudioContext
// var whiteNoise = context.createWhiteNoise();
// whiteNoise.connect(context.destination);