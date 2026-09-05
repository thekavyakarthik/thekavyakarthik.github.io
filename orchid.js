const vw = window.innerWidth;
const vh = window.innerHeight;

document.addEventListener("DOMContentLoaded", () => {
    offsetIntro();
    scrollableImageResize();
});

// offset the intro section dynamically based on the height of the header
function offsetIntro() {
    const divHeader = document.getElementById('bar');
    const headerHeight = divHeader.offsetHeight;

    const body = document.body;
    body.style.marginTop = `${headerHeight}px`;
}

// calculate the height of the scrollable image section dynamically
function scrollableImageHeight() {
    const divHeader = document.getElementById('bar');
    const headerHeight = divHeader.offsetHeight;

    const divScrollableImage = document.getElementById('scrollable-image');
    const scrollableHeight = vh - headerHeight - 0.1 * vh; // subtracting 10% of vh for padding
    
    divScrollableImage.style.height = `${scrollableHeight}px`;
}

function scrollableImageWidth() {
    const divScrollableImage = document.getElementById('scrollable-image');
    const isometricView = document.querySelector('.isometric-view');
    
    divScrollableImage.style.width = `${isometricView.offsetWidth}px`;
}

function scrollableImageResize() {
    if (vw > vh) {
        scrollableImageHeight();
        scrollableImageWidth();
    } else {
        const isometricView = document.querySelector('.isometric-view');
        isometricView.style.width = `${vw}px`;
        isometricView.style.height = `auto`;
    }
}