// ordering to chronological
document.getElementById("reorder").addEventListener("click", function() {
    const container = document.getElementById("grid-container");
    const events = Array.from(container.querySelectorAll(".grid-item"));

    events.sort((a, b) => {
        const dateA = new Date(a.getAttribute("data-date"));
        const dateB = new Date(b.getAttribute("data-date"));
        return dateA - dateB;
    });

    events.forEach(event => container.appendChild(event));
});