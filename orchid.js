const vw = window.innerWidth;
const vh = window.innerHeight;

document.addEventListener("DOMContentLoaded", () => {
    offsetIntro();
    scrollableImageResize();
    imageCollageGenerator();
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
    const scrollableHeight = vh - headerHeight;
    
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

function imageCollageGenerator() {
    // Defining the images
    const partList = [
        { src: './assets/orchid/flower-iso1.*', width: 'auto', height: 'min(25vw, 25vh)', alt: 'Lego parts' },
        { src: './assets/orchid/flower-back1.*', width: 'auto', height: 'min(25vw, 25vh)', alt: 'Lego parts' },
        { src: './assets/orchid/leg-left-iso1.8', width: 'auto', height: 'min(25vw, 25vh)', alt: 'Lego parts' },
        { src: './assets/orchid/leg-bottom1.*', width: 'auto', height: 'min(25vw, 25vh)', alt: 'Lego parts' },
        { src: './assets/orchid/leaf-iso1.*', width: 'auto', height: 'min(25vw, 25vh)', alt: 'Lego parts' },
        { src: './assets/orchid/green-buds.*', width: 'auto', height: 'min(40vw, 40vh)', alt: 'Lego parts' },
        { src: './assets/orchid/orchid-topsection.*', width: 'auto', height: 'min(40vw, 40vh)', alt: 'Lego parts' },
        { src: './assets/orchid/p2-rightsection.*', width: 'auto', height: 'min(40vw, 40vh)', alt: 'Lego parts' }
    ];

    const gallery = document.getElementById('image-collage');

    partList.forEach(imageData => {
        const img = document.createElement('img');
        
        img.src = imageData.src;
        img.alt = imageData.alt;
        
        img.style.width = imageData.width;
        img.style.height = imageData.height;
        
        // Optional: Prevent images from stretching awkwardly
        // img.style.objectFit = 'cover'; 
        
        gallery.appendChild(img);
    });
}