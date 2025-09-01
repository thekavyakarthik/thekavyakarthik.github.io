let chronological = false;
const container = document.getElementById("grid-container");
const ogOrder = Array.from(container.querySelectorAll(".grid-item")); // stores custom order in array
const reorderBt = document.getElementById("reorder");

reorderBt.addEventListener("click", function() {
    const events = Array.from(container.querySelectorAll(".grid-item"));

    // ordering chronologically
    if (!chronological) {
        events.sort((a, b) => {
            const dateA = new Date(a.getAttribute("data-date"));
            const dateB = new Date(b.getAttribute("data-date"));
            return dateA - dateB;
        });

        reorderBt.textContent = "View Custom Order";
        chronological = true;
    } else { // ordering using custom order
        events.splice(0, events.length, ...ogOrder);
        reorderBt.textContent = "View Chronologically";
        
        chronological = false;
    }

    events.forEach(event => container.appendChild(event));
});