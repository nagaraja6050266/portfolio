var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("nav").style.top = "0";
    } else {
        document.getElementById("nav").style.top = "-100px";
    }
    prevScrollpos = currentScrollPos;
}
// Function to fade in the element
function fadeIn() {
    var animatedElement = document.getElementById("animatedElement");

    var rect = animatedElement.getBoundingClientRect();
    var windowHeight = window.innerHeight || document.documentElement.clientHeight;

    // Check if the element is in the viewport
    if (rect.top >= 0 && rect.bottom <= windowHeight) {
        animatedElement.style.opacity = 1; // Make the element visible
        animatedElement.classList.add("fade-in"); // Apply a fade-in animation class
    }
}
