document.addEventListener("DOMContentLoaded", () => {
    showView(0);
});

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