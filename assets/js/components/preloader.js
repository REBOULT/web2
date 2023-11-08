// Constants Variables
const preloader = document.querySelector('.preloader');
const preloaderItemLoading = preloader.querySelector('.preloader-item-loading');
const preloaderItem = preloader.querySelector('.preloader-item');

const infoImg = document.querySelector('.info-img');
const infoTitle = document.querySelector('.info-title');
const infoContent = document.querySelector('.info-content');

const playerMusic = document.querySelector('#player-music');
// Temporal Variables
let preloaderHideInterval, i = 1;

const preloaderHideAnim = _ => {
    i -= .01;
    preloader.style.opacity = i;

    if (i <= 0) {
        clearInterval(preloaderHideInterval);
        preloader.remove();
    };

    if (i <= 1) {
        player.playVideo();
        setTimeout(_ => [infoImg, infoTitle, infoContent].forEach(el => el.classList.add('show')), 1);
    };
};

const preloaderItemAnimationLoaded = _ => {
    preloaderItemLoading.classList.add('loaded');
    preloaderItem.classList.add('loaded');
};

const preloaderItemAnimationClick = _ => {
    [preloader, preloaderItem].forEach(el => el.classList.add('clicked'));
    playerMusic.play();
    setTimeout(_ => preloaderHideInterval = setInterval(preloaderHideAnim, 10), 1);
};

// Event Listeners
preloaderItem.onclick = preloaderItemAnimationClick;
window.onload = preloaderItemAnimationLoaded;
