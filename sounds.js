
let Sound = class {
    constructor(number) {
        this.number = number;
        let soundNumber = number
        let soundAudio = document.getElementById(`${soundNumber}-audio`);
        let soundDiv = document.getElementById(`${soundNumber}-div`);
        // soundSeek = document.getElementById(`${soundNumber}-seek`);
        let soundVol = document.getElementById(`${soundNumber}-vol`);
        let soundSelector = document.getElementById(`${soundNumber}-selector`);
        let soundPlayButton = document.getElementById(`${soundNumber}-play`);
        let soundPauseButton = document.getElementById(`${soundNumber}-pause`);
     
        this.soundAudio = soundAudio
        this.soundDiv = soundDiv
        this.soundVol = soundVol
        this.soundSelector = soundSelector
        this.soundPlayButton = soundPlayButton
        this.soundPauseButton = soundPauseButton

        let sounds = { 
            piano: './assets/sounds/piano.flac',
            nature: './assets/sounds/nature.flac',
            indie: './assets/sounds/indie.flac'
        }
        this.sounds = sounds

        window[`track${soundNumber}`] = context.createMediaElementSource(soundAudio)
        window[`track${soundNumber}`].connect(masterGainNode).connect(context.destination)
        
        //TESTING ONLY
        this.soundAudio.volume = 0.9

    }

    soundToggle() {
        if (this.soundAudio.paused && !this.soundAudio.src.includes('none')) {
            this.soundAudio.play();
            this.soundDiv.classList.add("playing");
            this.soundPlayButton.classList.add("inactive");
            this.soundPauseButton.classList.remove("inactive");
        } else {
            this.soundAudio.pause();
            this.soundDiv.classList.remove("playing");
            this.soundPauseButton.classList.add("inactive");
            this.soundPlayButton.classList.remove("inactive");
        }
    }
    soundPlay() {
        this.soundAudio.play();
        this.soundDiv.classList.add("playing")
        this.soundPlayButton.classList.add("inactive");
        this.soundPauseButton.classList.remove("inactive");
    }
    soundStop() {
        this.soundAudio.pause();
        this.soundAudio.currentTime = 0;
        this.soundDiv.classList.remove("playing")
        this.soundPauseButton.classList.add("inactive");
        this.soundPlayButton.classList.remove("inactive");
    }
    soundVolumeSet() {
        this.soundAudio.muted = false;
        this.soundAudio.volume = this.soundVol.value;
    }
    alertUpload() {
        let that = this
        alert("Coming Soon!!");
        this.soundAudio.pause();
        this.soundDiv.classList.remove("playing");
        this.soundPauseButton.classList.add("inactive");
        this.soundPlayButton.classList.remove("inactive");
        this.soundSelector.value = './assets/sounds/nature.flac';
        setTimeout(function () { that.soundPlay() }, 3000)
    }
   
    soundSelect() {
        if (this.soundSelector.value === "none") {
            this.alertUpload();
        } else {
            this.soundAudio.src = this.sounds[this.soundSelector.value];
            this.soundPlay();
        }
    }

    //SEEKBAR 
    // soundMaxDurSet(){soundSeek.max = soundAudio.duration;}
    // soundDurSet(){soundSeek.value = soundAudio.currentTime};
    // soundSeekSet(){soundAudio.currentTime = soundSeek.value; soundPlay()}
    // soundReSet(){
    //     this.soundAudio.currentTime = 0;
    //     this.soundPlay()
    // }

}

const oneSound = new Sound('one')
const twoSound = new Sound('two')
const threeSound = new Sound('three')
const fourSound = new Sound('four')