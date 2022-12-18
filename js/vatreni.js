particlesJS.load('particles-js', 'rain.json', function () {
    console.log('callback - particles.js config loaded');
});


const audio = document.getElementById('audio');

const audioCtx = new AudioContext();
const analyser = audioCtx.createAnalyser();
const source = audioCtx.createMediaElementSource(audio)
source.connect(analyser);
analyser.connect(audioCtx.destination);

analyser.fftSize = 32;
const bufferLength = analyser.frequencyBinCount;
const dataArray = new Uint8Array(bufferLength);

document.getElementById('control').addEventListener('click', (e) => {
    e.target.classList.toggle('pause')
    audio.paused ? audio.play() : audio.pause()

})

const update = () => {
    if (!audio.paused) {
        analyser.getByteTimeDomainData(dataArray);
        const radius = Math.max.apply(Math, dataArray) / 5
        document.body.style.background = `radial-gradient(circle at center, #1515151 1% , #202020 ${radius}%, black 100%)`
        console.log(radius);
    }
}

setInterval(update, 90);