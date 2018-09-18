function Analyser (el, fftSize, STC) {
    this.el = el;
    this.playState = false;
    this.audioContext = new AudioContext();
    this.analyser = this.audioContext.createAnalyser();
    this.analyser.smoothingTimeConstant = STC || 1;
    this.analyser.fftSize = fftSize || 512;
    this.sourceNode =null;
    this.audio = null;
    this.init();
}

Analyser.prototype.init = function() {
    var self = this;
    this.el.addEventListener('change', function(e) {
        var stream = URL.createObjectURL(e.target.files[0]);
        if(self.audio) { self.audio.pause() }
        self.audio = new Audio();
        self.audio.src = stream;
        self.audio.addEventListener('canplay', function(e) {
            self.sourceNode = self.audioContext.createMediaElementSource(self.audio);
            self.sourceNode.connect(self.analyser);
            self.sourceNode.connect(self.audioContext.destination);
            self.audio.play();
            self.playState = true;
        })
    })
}

Analyser.prototype.getTimeData = function() {
    if(this.playState) {
        var timeArr = new Uint8Array(this.analyser.frequencyBinCount)
        this.analyser.getByteTimeDomainData(timeArr);
        return timeArr
    }else{
        return []
    }
}

Analyser.prototype.getFreqData = function() {
    if(this.playState) {
        var freqArr = new Float32Array(this.analyser.frequencyBinCount)
        this.analyser.getFloatFrequencyData(freqArr);
        return freqArr
    }else{
        return []
    }
}

Analyser.prototype.getAudioLength = function() {
    return this.analyser.fftSize / 2
}