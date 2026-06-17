// Note: the majority of variables in this file are camelCase styled

const destinationsDiv =
    document.querySelector('.destinationsDiv');

const sidebarTitle =
    document.querySelector('.sidebar-title');

    const availableFlights = document.querySelectorAll(".A");

    const destinations = document.querySelectorAll('.destination');

    //The accordian animation code

sidebarTitle.addEventListener('click', () => {

    if (!destinationsDiv.classList.contains("show-destinations")) {

        destinationsDiv.classList.add("show-destinations");

        destinationsDiv.style.maxHeight =
            destinationsDiv.scrollHeight + "px";

    } else {

        destinationsDiv.classList.remove("show-destinations");

        destinationsDiv.style.maxHeight = "0px";

    }

});

//The filtering code

destinations.forEach(function(destination) {
    destination.addEventListener("click", (aDestination) => {
        destinationValue = aDestination.target.dataset.destination;
        availableFlights.forEach(function(availableFlight) {
            if(availableFlight.dataset.destination === destinationValue) {
                availableFlight.style.display = "block";
            }
            else {
                availableFlight.style.display = "none";
            }
        })
    });
})