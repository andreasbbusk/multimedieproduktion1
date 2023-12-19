/* -- Full screen sidebar toggle -- */

function openNav() {
    document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}

/* -- Menu toggle -- */

function openBeer() {
    document.getElementById("beerNav").style.width = "100%";
}

function closeBeer() {
    document.getElementById("beerNav").style.width = "0%";
}

/* ---------- Logo resizing on desktop ---------- */
var logo = document.querySelector('.logo2');

/* Change logo height if scrolled > 64px & using screenwidth > 768px */
window.onscroll = () => {
    if (screen.width >= 768) {          // Check screen width
        if (window.scrollY > 64) {      // Check scroll amount
            logo.style.width = "25%";   // Make logo small
        } else {
            logo.style.width = "40%";   // Make logo large
        }
    }
}