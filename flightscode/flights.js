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
  // Austria
  "Innsbruck Airport (INN)",
  "Salzburg Airport (SZG)",
  "Vienna International Airport (VIE)",

  // Bulgaria
  "Burgas Airport (BOJ)",

  // Canary Islands
  "Fuerteventura Airport (FUE)",
  "Gran Canaria Airport (LPA)",
  "La Palma Airport (SPC)",
  "Lanzarote Airport (ACE)",
  "Tenerife South Airport (TFS)",

  // Channel Islands
  "Jersey Airport (JER)",

  // Croatia
  "Dubrovnik Airport (DBV)",
  "Pula Airport (PUY)",
  "Split Airport (SPU)",

  // Cyprus
  "Larnaca International Airport (LCA)",
  "Paphos International Airport (PFO)",

  // Czech Republic
  "Prague Airport (PRG)",

  // Denmark
  "Copenhagen Airport (CPH)",

  // Egypt
  "Hurghada International Airport (HRG)",
  "Sharm El Sheikh International Airport (SSH)",

  // Estonia
  "Tallinn Airport (TLL)",

  // France
  "Bergerac Airport (EGC)",
  "La Rochelle Airport (LRH)",
  "Nice Côte d'Azur Airport (NCE)",
  "Paris Charles de Gaulle Airport (CDG)",
  "Perpignan Airport (PGF)",
  "Strasbourg Airport (SXB)",

  // Germany
  "Berlin Brandenburg Airport (BER)",
  "Cologne Bonn Airport (CGN)",

  // Greece
  "Athens International Airport (ATH)",
  "Chania International Airport (CHQ) - Crete",
  "Corfu International Airport (CFU)",
  "Heraklion International Airport (HER) - Crete",
  "Kalamata International Airport (KLX)",
  "Kavala International Airport (KVA) - Thassos",
  "Kefalonia Airport (EFL)",
  "Kos International Airport (KGS)",
  "Lesvos Mytilene Airport (MJT)",
  "Preveza Airport (PVK) - Lefkada",
  "Rhodes International Airport (RHO)",
  "Samos International Airport (SMI)",
  "Santorini Airport (JTR)",
  "Skiathos Airport (JSI)",
  "Thessaloniki Airport (SKG) - Halkidiki",
  "Zakynthos Airport (ZTH) - Zante",

  // Hungary
  "Budapest Airport (BUD)",

  // Iceland
  "Keflavík International Airport (KEF) - Reykjavik",

  // Italy
  "Catania Airport (CTA) - Sicily",
  "Naples International Airport (NAP)",
  "Olbia Costa Smeralda Airport (OLB) - Sardinia",
  "Palermo Airport (PMO) - Sicily",
  "Pisa International Airport (PSA)",
  "Rome Fiumicino Airport (FCO)",
  "Salerno Costa d'Amalfi Airport (QSR)",
  "Venice Marco Polo Airport (VCE)",
  "Verona Airport (VRN)",

  // Malta
  "Malta International Airport (MLA)",

  // Montenegro
  "Tivat Airport (TIV)",

  // Morocco
  "Agadir Al Massira Airport (AGA)",
  "Marrakech Menara Airport (RAK)",

  // Norway
  "Bergen Airport (BGO)",

  // Poland
  "Gdańsk Airport (GDN)",
  "Kraków Airport (KRK)",

  // Portugal
  "Faro Airport (FAO) - Algarve",
  "Madeira Airport (FNC)",
  "Porto Airport (OPO)",

  // Balearic Islands
  "Ibiza Airport (IBZ)",
  "Menorca Airport (MAH)",
  "Palma de Mallorca Airport (PMI) - Majorca",

  // Mainland Spain
  "Alicante Airport (ALC)",
  "Almería Airport (LEI)",
  "Barcelona El Prat Airport (BCN)",
  "Girona-Costa Brava Airport (GRO)",
  "Jerez Airport (XRY)",
  "Málaga Airport (AGP)",
  "Reus Airport (REU)",

  // Switzerland
  "Geneva Airport (GVA)",

  // Turkey
  "Antalya Airport (AYT)",
  "Bodrum Milas Airport (BJV)",
  "Dalaman Airport (DLM)",
  "Izmir Adnan Menderes Airport (ADB)"
];

const fromDestination = document.querySelector(".booking-flights__input");

const fromContainer = document.querySelector(".booking-flights__from")

const suggestions = document.querySelector(".booking-flights__suggestions")

const  toDestinationsInput = document.querySelector(".booking-flights__input--to");

const toSuggestions = document.querySelector(".booking-flights__suggestions--to");

const toContainer = document.querySelector(".booking-flights__to");




let matches = [];

let selectedFromDestIndex = 0;

let toMatches = [];

let selectedToDestIndex= 0;

function debounce(fn, delay = 150) {

}

toDestinationsInput.addEventListener("keydown",  function(event) {
    let toSuggestionContainer = document.querySelectorAll(".booking-flights__suggestion-container--to");
    if(event.key === 'Enter') {
        event.preventDefault();
        if(toMatches.length !== 0) {
        toDestinationsInput.value = toMatches[selectedToDestIndex]
        }
    }
    if(event.key === 'ArrowDown') {
        event.preventDefault();
        if(selectedToDestIndex!== toMatches.length - 1){
            selectedToDestIndex++;
        }
    }
    if(event.key === 'ArrowUp') {
        event.preventDefault();
        if(selectedToDestIndex!== 0) {
            selectedToDestIndex--;
        } 
    }
    toSuggestionContainer.forEach(function(suggestionContainer) {
        suggestionContainer.classList.remove("booking-flights__suggestion-container--selected")
});

toSuggestionContainer[selectedToDestIndex].classList.add("booking-flights__suggestion-container--selected");
})



toDestinationsInput.addEventListener("input", debounce(async function()) {
    toSuggestions.innerHTML = "";
    selectedToDestIndex= 0;
     let toDestinationsInputValue = toDestinationsInput.value.trim().toLowerCase();
     toMatches = endingPlaces.filter(function(place) {
        return place.toLowerCase().startsWith(toDestinationsInputValue);
     })
     if(toMatches.length > 0){
        toSuggestions.style.display = "block";
        toSuggestions.style.height = "max-content";
        for(let place of toMatches) {
        let toSuggestionContainer = document.createElement("div");
        toSuggestions.appendChild(toSuggestionContainer);
        toSuggestionContainer.textContent = place;
        toSuggestionContainer.classList.add("booking-flights__suggestion-container--to");
     }
     }

     if(toMatches.length === 0 || toDestinationsInputValue.length === 0) {
        toSuggestions.innerHTML = "No Results";
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
        if(selectedFromDestIndex < matches.length - 1) {
                    selectedFromDestIndex++
        }

    }
    if(event.key === 'ArrowUp') {
        event.preventDefault();
        if(selectedFromDestIndex > 0) {        
            selectedFromDestIndex--;
        }

    }
    suggestionContainer.forEach(function(suggestion) {
        suggestion.classList.remove("booking-flights__suggestion-container--selected")
    })
    if(suggestionContainer.length > 0) {
        suggestionContainer[selectedFromDestIndex].classList.add("booking-flights__suggestion-container--selected");
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
        toSuggestions.style.display = "none";
    }
    if(!toContainer.contains(event.target)) {
        toSuggestions.style.display = "none";
    }
})

function closeSuggestions() {
    suggestions.innerHTML = "";
    suggestions.style.display = "none";
}

