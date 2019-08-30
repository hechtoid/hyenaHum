AudioContext = window.AudioContext || window.webkitAudioContext;

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

function noiseSelect(noiseColor) {

    switch (noiseColor) {
        case 'white':
            // volumeControl.value = 0.3
            whiteGain = context.createGain()
            whiteGain.gain.value = 0.3;
            whiteNoise.connect(whiteGain).connect(gainNode).connect(context.destination);
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
    brownGain.gain.value = 0.3;
    brownNoise.connect(brownGain);
    
    var lfo = context.createOscillator();
    lfo.frequency.value = 0.3;
    var lfoGain = context.createGain();
    lfoGain.gain.value = 0.2;
    
    lfo.start(0);
    lfo.connect(lfoGain);
    lfoGain.connect(brownGain.gain);
    brownGain.connect(context.destination);
}