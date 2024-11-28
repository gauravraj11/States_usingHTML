// Initialize a single shared count variable
let sharedCount = 0;

// Function to update all boxes with the current shared count
function updateCounts() {
    const countElements = document.querySelectorAll('.count');
    countElements.forEach(countElement => {
        countElement.textContent = sharedCount;
    });
}

// Add event listeners to all buttons
document.querySelectorAll('.update-button').forEach(button => {
    button.addEventListener('click', () => {
        sharedCount++;
        updateCounts();
    });
});
