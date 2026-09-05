const vw = window.innerWidth;
const vh = window.innerHeight;

document.addEventListener("DOMContentLoaded", () => {
    offsetIntro();
    calculateIntroDimensions();
    scrollableImageResize();
});

// offset the intro section dynamically based on the height of the header
function offsetIntro() {
    const divHeader = document.getElementById('bar');
    const headerHeight = divHeader.offsetHeight;

    const body = document.body;
    body.style.marginTop = `${headerHeight}px`;
}

function calculateIntroDimensions() {
    const divIntro = document.getElementById('intro');
    const divIntroPicture = document.getElementById('intro-picture');
    const divIntroText = document.getElementById('intro-text');
    const introImage = document.getElementById('intro-picture-image');
    let widthIntroPicture;
    let widthIntroText;

    if (vw > vh) {
        // Calculate the width for intro section
        divIntro.classList.toggle("flex-layout", true);
        // divIntro.classList.toggle("block-layout", false);
        widthIntroPicture = 0.4 * vh;
        widthIntroText = vw - widthIntroPicture;

        divIntroPicture.style.width = `${widthIntroPicture}px`;
        divIntroText.style.width = `${widthIntroText}px`;
        divIntroPicture.style.height = `${widthIntroPicture}px`;
        introImage.src = './assets/profile-portrait.jpeg';
    } else {
        // calculate the height for intro section
        //divIntro.classList.toggle("flex-layout", false);
        divIntro.classList.toggle("block-layout", true);
        introImage.src = './assets/profile-landscape.jpeg';
        // widthIntroPicture = vw;
        // widthIntroText = vw;

        // divIntroPicture.style.height = `${heightIntroPicture}px`;
        // divIntroText.style.height = `${heightIntroText}px`;
    }
    // divIntroPicture.style.width = `${widthIntroPicture}px`;
    // divIntroText.style.width = `${widthIntroText}px`;
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