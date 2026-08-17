const startingPlaces = [
    "London, heathrow",
    "London, Gatwick",
    "London, stansted",
    "London, luton"
];

const fromDestination = document.querySelector(".booking-flights__input");

const fromContainer = document.querySelector(".booking-flights__from")

const suggestions = document.querySelector(".booking-flights__suggestions")

let matches = null;

fromDestination.addEventListener("keyup", function(event) {
    suggestions.innerHTML = "";
 

    let fromValue = fromDestination.value.trim().toLowerCase();
    matches = startingPlaces.filter(function(place) {
       return place.toLowerCase().startsWith(fromValue);

    })
        if(matches.length > 0) {
        for(let place of matches) {
            suggestions.innerHTML += `${place}<br>`;
            suggestions.style.display = "block";
            suggestions.style.height = "max-content";
            checkForSuggestionClicks();
            const suggestionContainer = document.createElement("div");
            suggestions.appendChild("")
        }
    }

           if(matches.length === 0) {
        suggestions.textContent = "No results";
    }

    if(fromValue === "") {
        suggestions.innerHTML = "";
    }


})

fromDestination.addEventListener("keydown", function(event) {
        if(event.key === 'Enter') {
            fromDestination.value = matches[0];
    }

})

function checkForSuggestionClicks() {
    matches.forEach(function(suggestion) {
        matches.addEventListener("click", function() {
            fromDestination.value = suggestion;
        })
    })
}
