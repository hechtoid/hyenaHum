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


function noiseSelect() {
    var context = new AudioContext
    var whiteNoise = context.createWhiteNoise();
    var pinkNoise = context.createPinkNoise();
    var brownNoise = context.createBrownNoise();
    switch (noiseSelector.value) {
        case 'none':
            context.close()
            break;
        case 'white':
            whiteNoise.connect(context.destination);
            break;
        case 'pink':
            pinkNoise.connect(context.destination);
            break;
        case 'brown':
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