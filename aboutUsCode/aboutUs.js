const flightsLink = document.querySelector(".colaconest-details--link");

const openNavbarButton = document.querySelector(".opennav-button");

const mainHeader = document.querySelector(".main-header");

const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach(function(navLink) {
    navLink.addEventListener("mouseover", function() {
        this.classList.toggle("navLinkAnimation")
    });
    navLink.addEventListener("mouseout", function() {
        this.classList.toggle("navLinkAnimation");
    })
})

openNavbarButton.addEventListener("click", ()=> {
    const navbar = document.querySelector("nav");
    mainHeader.classList.toggle("main-header--open")
    openNavbarButton.classList.toggle("navbar-button--rotated")
})

flightsLink.addEventListener("click", ()=> {
    window.location.href = "../flightscode/flights.html"
})