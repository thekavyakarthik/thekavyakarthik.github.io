const vw = window.innerWidth;
const vh = window.innerHeight;

document.addEventListener("DOMContentLoaded", () => {
    offsetIntro();
    calculateIntroDimensions();
    scrollableImageResize();
    showView(0);
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

// Change image in the scrollable image section based on the button clicked
let currentView = 0;

// Defining the views and their corresponding images and navigation options
const views = {
    0: {
        image: "assets/orchid/isometric.PNG",
        left: 3,
        right: 1
    },

    1: {
        image: "assets/orchid/front-right.PNG",
        left: 0,
        right: 2,
        down: 5
    },

    2: {
        image: "assets/orchid/right.PNG",
        left: 1,
        up: 6
    },

    3: {
        image: "assets/orchid/front-left.PNG",
        left: 4,
        right: 0,
        down: 7
    },

    4: {
        image: "assets/orchid/left.PNG",
        right: 3,
        down: 8
    },

    5: {
        image: "assets/orchid/front-right-frontsection.PNG",
        up: 1
    },

    6: {
        image: "assets/orchid/right-top.PNG",
        down: 2
    },

    7: {
        image: "assets/orchid/front-left-bottom.PNG",
        up: 3,
        left: 8
    },

    8: {
        image: "assets/orchid/left-bottom.PNG",
        up: 4,
        right:7
    }
};

function showView(view) {
    currentView = view;

    const data = views[view];

    document.getElementById("main-image").src = data.image;

    updateButton("up", data.up);
    updateButton("down", data.down);
    updateButton("left", data.left);
    updateButton("right", data.right);
}

function updateButton(id, destination) {
    const button = document.getElementById(id);

    if (destination === undefined) {
        button.style.display = "none";
    } else {
        button.style.display = "block";
        button.onclick = () => showView(destination);
    }
}

document.getElementById("reset").onclick = () => {
    showView(0);
};