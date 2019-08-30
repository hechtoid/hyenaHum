

window.addEventListener('DOMContentLoaded', (event) => {
    brownNoise = context.createBrownNoise();
    pinkNoise = context.createPinkNoise();
    whiteNoise = context.createWhiteNoise();
    noiseGainNode = context.createGain();
    
    noiseVolumeControl = document.querySelector('#noiseVolume');
    noiseVolumeControl.addEventListener('input', function () {
        noiseGainNode.gain.value = this.value;
    }, false);
});

function noiseSelect(noiseColor) {

    switch (noiseColor) {
        case 'white':
            // volumeControl.value = 0.3
            whiteGain = context.createGain()
            whiteGain.gain.value = 0.3;
            whiteNoise.connect(whiteGain).connect(noiseGainNode).connect(masterGainNode).connect(context.destination);
            break;
        case 'pink':
            pinkNoise.connect(noiseGainNode).connect(masterGainNode).connect(context.destination);
            break;
        case 'brown':
            brownNoise.connect(noiseGainNode).connect(masterGainNode).connect(context.destination);
            break;
        case 'custom':
            oneSound.alertUpload();
            break;
    }
}


function makeWaves() {
    // brownNoise = context.createBrownNoise();
    var brownGain = context.createGain();
    brownGain.gain.value = 0.9;
    brownNoise.connect(brownGain);
    
    var lfo = context.createOscillator();
    lfo.frequency.value = 0.3;
    var lfoGain = context.createGain();
    lfoGain.gain.value = 0.7;
    
    lfo.start(0);
    lfo.connect(lfoGain);
    lfoGain.connect(brownGain.gain);
    brownGain.connect(noiseGainNode).connect(masterGainNode).connect(context.destination);
}