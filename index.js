AudioContext = window.AudioContext || window.webkitAudioContext;
context = new AudioContext
masterGainNode = context.createGain();

function stopAllSoundsAndNoises() {
    pinkNoise.disconnect()
    brownNoise.disconnect()
    whiteNoise.disconnect()
    oneSound.soundStop()
    twoSound.soundStop()
    threeSound.soundStop()
    fourSound.soundStop()
}

window.addEventListener('DOMContentLoaded', (event) => {
    masterVolumeControl = document.querySelector('#masterVolume');
    masterVolumeControl.addEventListener('input', function () {
        masterGainNode.gain.value = this.value;
    }, false);
});
