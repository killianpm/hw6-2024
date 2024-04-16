var video;

window.addEventListener('load', function() {
	console.log('Good job opening the window')
	video = this.document.querySelector('#player1')
	video.autoplay = false;
	video.loop = false;
	console.log(`Auto play is set to ${video.autoplay}`);
});

document.querySelector('#play').addEventListener('click', function() {
	console.log('Play Video');
	video.play();
	document.querySelector('#volume').textContent = `${video.volume * 100}%`;
});

document.querySelector("#pause").addEventListener('click', function() {
    console.log('Pause Video');
    video.pause();
});

document.querySelector("#slower").addEventListener('click', function() {
    console.log('Slow Down Video');
    video.playbackRate *= 0.9;
    console.log(`New speed: ${video.playbackRate}`);
});

document.querySelector('#faster').addEventListener('click', function() {
    video.playbackRate /= 0.9;
    console.log(`New speed: ${video.playbackRate}`);
});

document.querySelector('#skip').addEventListener('click', function() {
    if (video.currentTime + 10 > video.duration) {
        video.currentTime = 0;
    } else {
        video.currentTime += 10;
    }
    console.log(`Current time: ${video.currentTime}`);
});

document.querySelector('#mute').addEventListener('click', function() {
    if (video.muted) {
        video.muted = false;
        this.textContent = 'Mute';
		console.log('Unmute');
    } else {
        video.muted = true;
        this.textContent = 'Unmute';
		console.log('Mute');
    }
});

document.querySelector('#slider').addEventListener('input', function() {
    video.volume = this.value / 100;
    document.getElementById('volume').textContent = `${this.value}%`;
});

document.querySelector('#vintage').addEventListener('click', function() {
    video.classList.add('oldSchool');
});

document.querySelector('#orig').addEventListener('click', function() {
    video.classList.remove('oldSchool');
});