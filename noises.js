

window.addEventListener('DOMContentLoaded', (event) => {
    brownNoise = context.createBrownNoise();
    pinkNoise = context.createPinkNoise();
    whiteNoise = context.createWhiteNoise();
    noiseGainNode = context.createGain();
    noiseVolumeControl = document.getElementById('noise-volume');
    noiseVolumeControl.addEventListener('input', function () {
        noiseGainNode.gain.value = this.value;
    }, false);
    noiseSelector = document.getElementById('noise-selector')
});

function noiseSelect(value=noiseSelector.value) {
   
    switch (value) {
        case 'white':
            context.resume().then(() => {
            // volumeControl.value = 0.3
            pinkNoise.disconnect()
            brownNoise.disconnect()
            whiteNoise.disconnect()
            whiteGain = context.createGain()
            whiteGain.gain.value = 0.3;
            whiteNoise.connect(whiteGain).connect(noiseGainNode).connect(masterGainNode).connect(context.destination);
            })
            break;
        case 'pink':
            context.resume().then(() => {
            pinkNoise.disconnect()
            brownNoise.disconnect()
            whiteNoise.disconnect()
            pinkNoise.connect(noiseGainNode).connect(masterGainNode).connect(context.destination);
        })
        break;
        case 'brown':
            context.resume().then(() => {
            pinkNoise.disconnect()
            brownNoise.disconnect()
            whiteNoise.disconnect()
            brownNoise.connect(noiseGainNode).connect(masterGainNode).connect(context.destination);
        })
        break;
        case 'none':
            pinkNoise.disconnect()
            brownNoise.disconnect()
            whiteNoise.disconnect()
            break;
        case 'custom':
            oneSound.alertUpload();
            this.noiseSelector.value = 'none';
            break;
    }
}


function makeWaves() {
    context.resume().then(() => {
    pinkNoise.disconnect()
    brownNoise.disconnect()
    whiteNoise.disconnect()
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
})
}