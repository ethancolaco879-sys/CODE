const flightsLink = document.querySelector(".colaconest-details--link");

const openNavbarButton = document.querySelector(".opennav-button");

const mainHeader = document.querySelector(".main-header")

openNavbarButton.addEventListener("click", ()=> {
    const navbar = document.querySelector("nav");
    mainHeader.classList.toggle("main-header--open")
    openNavbarButton.classList.toggle("navbar-button--rotated")
})

flightsLink.addEventListener("click", ()=> {
    window.location.href = "../flightscode/flights.html"
})