const video = document.querySelector('.viewer'); //播放器
const playButton = document.querySelector('.toggle');
const player = document.querySelector('.player');
const progress = document.querySelector('.progress');
const progressBar = document.querySelector('.progress__filled');
const ranges = document.querySelectorAll('.player__slider');
const skipButtons = document.querySelectorAll('[data-skip]');
function togglePlay(){
    const method = video.paused ? 'play' : 'pause';
    video[method]();
}
function toggleIcon() {
    const icon = this.paused ? '►' : '❚ ❚';
    playButton.textContent = icon;
}
function skip() {
    const skipVal = this.dataset.skip;
    video.currentTime += parseFloat(skipVal);
}
function handleRangeUpdate(){
    video[this.name] = this.value;
}
function handleProgress(){
    const percent = (video.currentTime / video.duration) * 100;
    progressBar.style.flexBasis = `${percent}%`;
}
function scrub(e){
    const scrubTime = parseFloat(e.offsetX / progress.offsetWidth) * video.duration;
    video.currentTime = scrubTime;
}
function fullScreen() {
    if (video.requestFullscreen) {
        video.requestFullscreen();
    } else if (video.msRequestFullscreen) {
        video.msRequestFullscreen();
    } else if (video.mozRequestFullScreen) {
        video.mozRequestFullScreen();
    } else if (video.webkitRequestFullscreen) {
        video.webkitRequestFullscreen();
    }
}
playButton.addEventListener('click', togglePlay);
video.addEventListener('click', togglePlay);
video.addEventListener('play', toggleIcon);//當播放
video.addEventListener('pause', toggleIcon);//當暫停
video.addEventListener('timeupdate', handleProgress);
skipButtons.forEach(skipButton=> skipButton.addEventListener('click',skip));
ranges.forEach(range => range.addEventListener('change',handleRangeUpdate));
ranges.forEach(range => range.addEventListener('mouseover',handleRangeUpdate));
let isMousedown = false;
progress.addEventListener('click',scrub);
progress.addEventListener('mousemove', (e) => isMousedown && scrub(e));
progress.addEventListener('mousedown',() => isMousedown = true);
progress.addEventListener('mouseup',() => isMousedown = false);
progress.addEventListener('mouseout',() => isMousedown = false);