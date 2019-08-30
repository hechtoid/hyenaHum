
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


        //TESTING ONLY
        // audio.loop=false
        // this.soundAudio.muted = true
        this.soundAudio.volume = 0.9
        // setInterval(function(){console.log(soundAudio)}, 1000)
        // setInterval(){(console.log(soundAudio.src), 1000)}
        // setInterval(function(){console.log(soundSelector.value)}, 1000)
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
        // if (soundAudio.src.includes('none')){
        //     soundDiv.classList.remove("playing")
        //     soundPauseButton.classList.add("inactive");
        //     soundPlayButton.classList.remove("inactive");
        // } else { 
        this.soundDiv.classList.add("playing")
        this.soundPlayButton.classList.add("inactive");
        this.soundPauseButton.classList.remove("inactive");
        // }
    }
    soundPause() {
        this.soundAudio.pause();
        this.soundAudio.currentTime = 0;
        this.soundDiv.classList.remove("playing")
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
        this.soundSelector.value = './assets/sounds/haha.flac';
        setTimeout(function () { that.soundPlay() }, 3000)
        // soundSelector.value = './assets/sounds/Hyena Long.flac'; 
        // soundPlay();
    }
    soundSelect() {
        if (this.soundSelector.value === "none") {
            this.alertUpload();
        } else {
            this.soundAudio.src = this.soundSelector.value;
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