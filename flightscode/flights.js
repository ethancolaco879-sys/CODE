const startingPlaces = [
    "London, heathrow",
    "London, Gatwick",
    "London, stansted",
    "London, luton"
];

const fromDestination = document.querySelector(".booking-flights__input");

const fromContainer = document.querySelector("booking-flights__from")

let matches = null;

fromDestination.addEventListener("keyup", function(event) {

    let fromValue = fromDestination.value.trim().toLowerCase();
    matches = startingPlaces.filter(function(place) {
       return place.toLowerCase().startsWith(fromValue);

    })
        if(matches) {
        fromContainer.textContent = matches;
    }

})

fromDestination.addEventListener("keydown", function(event) {
        if(event.key === 'Enter') {
            fromDestination.value = matches[0];
    }
})

