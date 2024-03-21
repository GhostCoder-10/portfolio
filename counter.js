// Get the HTML element to display the counter
const visitorCountElement = document.getElementById("visitor-count");

// Initialize the counter variable (assuming no initial value stored)
let visitorCount = 0;

// Check if localStorage has a previous count (optional for persisting count across refreshes)
if (localStorage.getItem("visitorCount")) {
  visitorCount = parseInt(localStorage.getItem("visitorCount"));
}

// Increment the counter on page load
visitorCount++;

// Update the HTML element with the current count
visitorCountElement.textContent = visitorCount;

// Optionally store the count in localStorage for persistence (remove if not needed)
localStorage.setItem("visitorCount", visitorCount);
