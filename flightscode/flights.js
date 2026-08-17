const startingPlaces = [
    "Belfast International",
    "Birmingham",
    "Bristol",
    "Bournemouth",
    "East Midlands",
    "Edinburgh",
    "Glasgow",
    "Leeds Bradford",
    "Liverpool John Lennon",
    "London Gatwick",
    "London Luton",
    "London Stansted",
    "Manchester",
    "Newcastle International"
];
const fromDestination = document.querySelector(".booking-flights__input");

const fromContainer = document.querySelector(".booking-flights__from")

const suggestions = document.querySelector(".booking-flights__suggestions")



let matches = [];

let selectedIndex = 0;



fromDestination.addEventListener("input", function(event) {
    suggestions.innerHTML = "";
        if(!event.key === 'ArrowUp'|| 'ArrowDown') {
            selectedIndex = 0;
    }

    let fromValue = fromDestination.value.trim().toLowerCase();
    matches = startingPlaces.filter(function(place) {
       return place.toLowerCase().startsWith(fromValue);

    })
        if(matches.length > 0) {
        for(let place of matches) {
            suggestions.style.display = "block";
            suggestions.style.height = "max-content";

            let suggestionContainer = document.createElement("div");
            suggestions.appendChild(suggestionContainer);
            suggestionContainer.textContent = place;
            suggestionContainer.classList.add("booking-flights__suggestion-container");

        }
                                checkForSuggestionClicks();
    }

           if(matches.length === 0) {
        suggestions.textContent = "No results";
        suggestions.style.display = "block";
        suggestions.style.height = "max-content";
    }

    if(fromValue === "") {
        suggestions.innerHTML = "";
        closeSuggestions();
    }


})

fromDestination.addEventListener("keydown", function(event) {
    console.log(selectedIndex);


    let suggestionContainer = document.querySelectorAll(".booking-flights__suggestion-container");

        if(event.key === 'Enter' && matches.length > 0) {
            event.preventDefault();
            fromDestination.value = matches[selectedIndex];
            closeSuggestions();
    }

    if(event.key === 'ArrowDown') {
        event.preventDefault();
        if(selectedIndex < matches.length - 1) {
                    selectedIndex++
        }

    }
    if(event.key === 'ArrowUp') {
        event.preventDefault();
        if(selectedIndex > 0) {        
            selectedIndex--;
        }

    }
    suggestionContainer.forEach(function(suggestion) {
        suggestion.classList.remove("booking-flights__suggestion-container--selected")
    })
    if(suggestionContainer.length > 0) {
        suggestionContainer[selectedIndex].classList.add("booking-flights__suggestion-container--selected");
    }
     
    
})

function checkForSuggestionClicks() {
    let suggestionContainer = document.querySelectorAll(".booking-flights__suggestion-container");
    suggestionContainer.forEach(function(suggestion) {
        suggestion.addEventListener("click", function() {
            fromDestination.value = suggestion.textContent;
            closeSuggestions();
        })
    })
}

document.addEventListener("click", function(event) {
    if(!fromContainer.contains(event.target)) {
        closeSuggestions();
    }
})

function closeSuggestions() {
    suggestions.innerHTML = "";
    suggestions.style.display = "none";
}

