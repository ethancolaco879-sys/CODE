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

const endingPlaces = [
  "Salzburg", "Vienna",
  "Formentera", "Ibiza", "Majorca", "Menorca", "Palma City",
  "Bourgas",
  "Fuerteventura", "Gran Canaria", "La Palma", "Lanzarote", "Tenerife",
  "Jersey",
  "Dubrovnik", "Pula and Istrian Coast", "Split and Dalmatian Coast",
  "Larnaca", "Paphos",
  "Prague",
  "Copenhagen",
  "Hurghada", "Sharm El Sheikh",
  "Tallinn",
  "Central France (La Rochelle)", "Colmar (Strasbourg airport)", "Monaco", "Nice",
  "North of France", "Paris", "South of France (Bergerac)", "South of France (Girona)",
  "South of France (Nice)", "South of France (Perpignan)", "Strasbourg",
  "Berlin", "Cologne",
  "Aegina Island", "Alonissos Island", "Athens", "Athens Coast", "Corfu",
  "Crete (Chania Area)", "Crete (Heraklion Area)", "Halkidiki", "Kalymnos Island",
  "Kefalonia", "Kos", "Lefkas", "Leros Island", "Lesvos", "Meganisi Island",
  "Olympus Riviera", "Parga Area", "Peloponnese", "Poros Island", "Preveza Area",
  "Rhodes", "Samos", "Santorini", "Skiathos", "Skopelos Island", "Symi Island",
  "Thassos", "Thessaloniki", "Zante",
  "Budapest",
  "Iceland",
  "Emilia-Romagna", "Florence (Pisa airport)", "Lake Garda", "Lucca", "Naples",
  "Palermo", "Pisa", "Rome", "Rome Area", "Sardinia", "Sicily (Catania Airport)",
  "Sicily (Palermo Airport)", "Sorrento Area", "Trentino-South Tyrol", "Tuscany",
  "Venetian Riviera", "Venice", "Verona",
  "Malta and Gozo",
  "Montenegro (Dubrovnik Airport)", "Montenegro (Tivat Airport)",
  "Agadir Area", "Marrakech Area", "Marrakech City",
  "Bergen",
  "Gdansk", "Krakow",
  "Algarve", "Braga (Porto airport)", "Costa Verde", "Madeira", "Porto City",
  "Bratislava (Vienna Airport)",
  "Alicante City", "Barcelona", "Cadiz (Jerez airport)", "Costa Blanca", "Costa Brava",
  "Costa Calida", "Costa De Almeria", "Costa De La Luz East", "Costa De La Luz West",
  "Costa Del Sol", "Costa Dorada", "Galicia (Porto Airport)", "Girona City",
  "Malaga City", "Murcia (Alicante airport)", "Seville (Jerez airport)",
  "Malmo (Copenhagen Airport)",
  "Geneva",
  "Enfidha Area",
  "Antalya Area", "Bodrum Area", "Dalaman Area", "Izmir Area"
];

const fromDestination = document.querySelector(".booking-flights__input");

const fromContainer = document.querySelector(".booking-flights__from")

const suggestions = document.querySelector(".booking-flights__suggestions")

const  toDestinationsInput = document.querySelector(".booking-flights__input--to");

const toSuggestions = document.querySelector(".booking-flights__suggestions--to");




let matches = [];

let selectedIndex = 0;

let toMatches = [];

toDestinationsInput.addEventListener("input", function() {
    toSuggestions.innerHTML = "";
     let toDestinationsInputValue = toDestinationsInput.value.trim().toLowerCase();
     toMatches = endingPlaces.filter(function(place) {
        return place.toLowerCase().startsWith(toDestinationsInputValue);
     })
     if(toMatches.length > 0){
        for(let place of toMatches) {
        let toSuggestionContainer = document.createElement("div");
        toSuggestions.appendChild(toSuggestionContainer);
        toSuggestionContainer.textContent = place;
     }
     }

     if(toMatches.length === 0) {
        toSuggestions.innerHTML = "";
     }
})



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

