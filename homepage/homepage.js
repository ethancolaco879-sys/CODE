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

const flights = [
    {
        id: 1,
        from: "London Stansted",
        to: "Lisbon",
        departureDate: "2026-09-10",
        departureTime: "06:30",
        arrivalTime: "09:15",
        price: 89
    },
    {
        id: 2,
        from: "London Stansted",
        to: "Lisbon",
        departureDate: "2026-09-10",
        departureTime: "13:20",
        arrivalTime: "16:05",
        price: 105
    },
    {
        id: 3,
        from: "London Stansted",
        to: "Lisbon",
        departureDate: "2026-09-10",
        departureTime: "18:45",
        arrivalTime: "21:30",
        price: 79
    },

    {
        id: 4,
        from: "London Gatwick",
        to: "Lisbon",
        departureDate: "2026-09-10",
        departureTime: "07:15",
        arrivalTime: "10:00",
        price: 92
    },
    {
        id: 5,
        from: "London Gatwick",
        to: "Lisbon",
        departureDate: "2026-09-10",
        departureTime: "15:40",
        arrivalTime: "18:25",
        price: 118
    },

    {
        id: 6,
        from: "Manchester",
        to: "Tenerife South Airport (TFS)",
        departureDate: "2026-09-12",
        departureTime: "06:00",
        arrivalTime: "10:35",
        price: 165
    },
    {
        id: 7,
        from: "Manchester",
        to: "Tenerife South Airport (TFS)",
        departureDate: "2026-09-12",
        departureTime: "09:30",
        arrivalTime: "14:05",
        price: 189
    },
    {
        id: 8,
        from: "Manchester",
        to: "Tenerife South Airport (TFS)",
        departureDate: "2026-09-12",
        departureTime: "15:10",
        arrivalTime: "19:45",
        price: 154
    },

    {
        id: 9,
        from: "Birmingham",
        to: "Tenerife South Airport (TFS)",
        departureDate: "2026-09-12",
        departureTime: "07:40",
        arrivalTime: "12:10",
        price: 159
    },
    {
        id: 10,
        from: "Birmingham",
        to: "Tenerife South Airport (TFS)",
        departureDate: "2026-09-12",
        departureTime: "14:25",
        arrivalTime: "18:55",
        price: 177
    },

    {
        id: 11,
        from: "London Gatwick",
        to: "Alicante Airport (ALC)",
        departureDate: "2026-09-15",
        departureTime: "05:50",
        arrivalTime: "09:20",
        price: 72
    },
    {
        id: 12,
        from: "London Gatwick",
        to: "Alicante Airport (ALC)",
        departureDate: "2026-09-15",
        departureTime: "11:40",
        arrivalTime: "15:10",
        price: 95
    },
    {
        id: 13,
        from: "London Gatwick",
        to: "Alicante Airport (ALC)",
        departureDate: "2026-09-15",
        departureTime: "17:20",
        arrivalTime: "20:50",
        price: 83
    },

    {
        id: 14,
        from: "Bristol",
        to: "Alicante Airport (ALC)",
        departureDate: "2026-09-15",
        departureTime: "06:15",
        arrivalTime: "09:45",
        price: 76
    },
    {
        id: 15,
        from: "Bristol",
        to: "Alicante Airport (ALC)",
        departureDate: "2026-09-15",
        departureTime: "16:00",
        arrivalTime: "19:30",
        price: 91
    },

    {
        id: 16,
        from: "London Luton",
        to: "Málaga Airport (AGP)",
        departureDate: "2026-09-18",
        departureTime: "06:45",
        arrivalTime: "10:35",
        price: 84
    },
    {
        id: 17,
        from: "London Luton",
        to: "Málaga Airport (AGP)",
        departureDate: "2026-09-18",
        departureTime: "12:25",
        arrivalTime: "16:15",
        price: 103
    },
    {
        id: 18,
        from: "London Luton",
        to: "Málaga Airport (AGP)",
        departureDate: "2026-09-18",
        departureTime: "18:10",
        arrivalTime: "22:00",
        price: 93
    },

    {
        id: 19,
        from: "Manchester",
        to: "Málaga Airport (AGP)",
        departureDate: "2026-09-18",
        departureTime: "07:10",
        arrivalTime: "11:10",
        price: 99
    },
    {
        id: 20,
        from: "Manchester",
        to: "Málaga Airport (AGP)",
        departureDate: "2026-09-18",
        departureTime: "15:30",
        arrivalTime: "19:30",
        price: 115
    },

    {
        id: 21,
        from: "London Stansted",
        to: "Palma de Mallorca Airport (PMI) - Majorca",
        departureDate: "2026-09-20",
        departureTime: "05:55",
        arrivalTime: "09:20",
        price: 69
    },
    {
        id: 22,
        from: "London Stansted",
        to: "Palma de Mallorca Airport (PMI) - Majorca",
        departureDate: "2026-09-20",
        departureTime: "10:45",
        arrivalTime: "14:10",
        price: 87
    },
    {
        id: 23,
        from: "London Stansted",
        to: "Palma de Mallorca Airport (PMI) - Majorca",
        departureDate: "2026-09-20",
        departureTime: "17:35",
        arrivalTime: "21:00",
        price: 75
    },

    {
        id: 24,
        from: "Birmingham",
        to: "Palma de Mallorca Airport (PMI) - Majorca",
        departureDate: "2026-09-20",
        departureTime: "06:30",
        arrivalTime: "09:55",
        price: 78
    },
    {
        id: 25,
        from: "Birmingham",
        to: "Palma de Mallorca Airport (PMI) - Majorca",
        departureDate: "2026-09-20",
        departureTime: "14:15",
        arrivalTime: "17:40",
        price: 94
    },

    {
        id: 26,
        from: "Newcastle International",
        to: "Paphos International Airport (PFO)",
        departureDate: "2026-09-22",
        departureTime: "06:10",
        arrivalTime: "12:50",
        price: 174
    },
    {
        id: 27,
        from: "Newcastle International",
        to: "Paphos International Airport (PFO)",
        departureDate: "2026-09-22",
        departureTime: "13:40",
        arrivalTime: "20:20",
        price: 192
    },

    {
        id: 28,
        from: "Manchester",
        to: "Paphos International Airport (PFO)",
        departureDate: "2026-09-22",
        departureTime: "07:00",
        arrivalTime: "13:35",
        price: 168
    },
    {
        id: 29,
        from: "Manchester",
        to: "Paphos International Airport (PFO)",
        departureDate: "2026-09-22",
        departureTime: "15:20",
        arrivalTime: "21:55",
        price: 185
    },

    {
        id: 30,
        from: "London Gatwick",
        to: "Faro Airport (FAO) - Algarve",
        departureDate: "2026-09-25",
        departureTime: "06:25",
        arrivalTime: "09:20",
        price: 71
    },
    {
        id: 31,
        from: "London Gatwick",
        to: "Faro Airport (FAO) - Algarve",
        departureDate: "2026-09-25",
        departureTime: "12:50",
        arrivalTime: "15:45",
        price: 89
    },
    {
        id: 32,
        from: "London Gatwick",
        to: "Faro Airport (FAO) - Algarve",
        departureDate: "2026-09-25",
        departureTime: "18:30",
        arrivalTime: "21:25",
        price: 81
    },

    {
        id: 33,
        from: "Bristol",
        to: "Faro Airport (FAO) - Algarve",
        departureDate: "2026-09-25",
        departureTime: "07:20",
        arrivalTime: "10:10",
        price: 74
    },
    {
        id: 34,
        from: "Bristol",
        to: "Faro Airport (FAO) - Algarve",
        departureDate: "2026-09-25",
        departureTime: "16:45",
        arrivalTime: "19:35",
        price: 88
    },

    {
        id: 35,
        from: "Leeds Bradford",
        to: "Ibiza Airport (IBZ)",
        departureDate: "2026-09-28",
        departureTime: "06:35",
        arrivalTime: "10:15",
        price: 96
    },
    {
        id: 36,
        from: "Leeds Bradford",
        to: "Ibiza Airport (IBZ)",
        departureDate: "2026-09-28",
        departureTime: "14:55",
        arrivalTime: "18:35",
        price: 119
    },

    {
        id: 37,
        from: "London Stansted",
        to: "Ibiza Airport (IBZ)",
        departureDate: "2026-09-28",
        departureTime: "05:45",
        arrivalTime: "09:20",
        price: 79
    },
    {
        id: 38,
        from: "London Stansted",
        to: "Ibiza Airport (IBZ)",
        departureDate: "2026-09-28",
        departureTime: "11:30",
        arrivalTime: "15:05",
        price: 101
    },
    {
        id: 39,
        from: "London Stansted",
        to: "Ibiza Airport (IBZ)",
        departureDate: "2026-09-28",
        departureTime: "18:15",
        arrivalTime: "21:50",
        price: 90
    },

    {
        id: 40,
        from: "Edinburgh",
        to: "Antalya Airport (AYT)",
        departureDate: "2026-10-02",
        departureTime: "06:05",
        arrivalTime: "12:40",
        price: 179
    },
    {
        id: 41,
        from: "Edinburgh",
        to: "Antalya Airport (AYT)",
        departureDate: "2026-10-02",
        departureTime: "13:15",
        arrivalTime: "19:50",
        price: 198
    },

    {
        id: 42,
        from: "Manchester",
        to: "Antalya Airport (AYT)",
        departureDate: "2026-10-02",
        departureTime: "05:50",
        arrivalTime: "12:10",
        price: 169
    },
    {
        id: 43,
        from: "Manchester",
        to: "Antalya Airport (AYT)",
        departureDate: "2026-10-02",
        departureTime: "14:35",
        arrivalTime: "20:55",
        price: 188
    },

    {
        id: 44,
        from: "London Gatwick",
        to: "Malta International Airport (MLA)",
        departureDate: "2026-10-05",
        departureTime: "06:20",
        arrivalTime: "10:35",
        price: 98
    },
    {
        id: 45,
        from: "London Gatwick",
        to: "Malta International Airport (MLA)",
        departureDate: "2026-10-05",
        departureTime: "13:10",
        arrivalTime: "17:25",
        price: 116
    },
    {
        id: 46,
        from: "London Gatwick",
        to: "Malta International Airport (MLA)",
        departureDate: "2026-10-05",
        departureTime: "18:40",
        arrivalTime: "22:55",
        price: 105
    },

    {
        id: 47,
        from: "Birmingham",
        to: "Malta International Airport (MLA)",
        departureDate: "2026-10-05",
        departureTime: "07:35",
        arrivalTime: "11:50",
        price: 109
    },

    {
        id: 48,
        from: "London Luton",
        to: "Barcelona El Prat Airport (BCN)",
        departureDate: "2026-10-08",
        departureTime: "06:40",
        arrivalTime: "09:55",
        price: 64
    },
    {
        id: 49,
        from: "London Luton",
        to: "Barcelona El Prat Airport (BCN)",
        departureDate: "2026-10-08",
        departureTime: "12:15",
        arrivalTime: "15:30",
        price: 82
    },
    {
        id: 50,
        from: "London Luton",
        to: "Barcelona El Prat Airport (BCN)",
        departureDate: "2026-10-08",
        departureTime: "19:05",
        arrivalTime: "22:20",
        price: 73
    }
];


const fromDestination = document.querySelector(".booking-flights__input");

const fromContainer = document.querySelector(".booking-flights__from")

const suggestions = document.querySelector(".booking-flights__suggestions")

const  toDestinationsInput = document.querySelector(".booking-flights__input--to");

const toSuggestions = document.querySelector(".booking-flights__suggestions--to");

const toContainer = document.querySelector(".booking-flights__to");

const navbarBtn = document.querySelector(".navigation__button");

const searchBtn = document.querySelector(".booking__search-button")

let matches = [];

let selectedFromDestIndex = 0;

let toMatches = [];

let selectedToDestIndex= 0;

let matchingFlights = null;

let toDestinationContainer = null

function debounce(airportFilteringCode, delay = 150) {
    let timer;
    return function() {
        clearTimeout(timer);
        timer = setTimeout(function() {
            airportFilteringCode()
        }, delay);
        
    }
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
if(selectedToDestIndex > 0) {
toSuggestionContainer[selectedToDestIndex].classList.add("booking-flights__suggestion-container--selected");
}
})



toDestinationsInput.addEventListener("input", debounce(async function() {
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
        toSuggestionContainer = document.createElement("div");
        toSuggestions.appendChild(toSuggestionContainer);
        toSuggestionContainer.textContent = place;
           
        toSuggestionContainer.addEventListener("click", function() {
            toDestinationsInput.value = toSuggestionContainer.textContent;
        
    })
        toSuggestionContainer.classList.add("booking-flights__suggestion-container--to");
     }
     }

     if(toMatches.length === 0 || toDestinationsInputValue.length === 0) {
        toSuggestions.innerHTML = "No Results";
     }
}));



fromDestination.addEventListener("input", debounce(async function() {
            suggestions.innerHTML = "";
            selectedFromDestIndex = 0;

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


}))

fromDestination.addEventListener("keydown", function(event) {



    let suggestionContainer = document.querySelectorAll(".booking-flights__suggestion-container");

        if(event.key === 'Enter' && matches.length > 0) {
            event.preventDefault();
            fromDestination.value = matches[selectedFromDestIndex];
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

searchBtn.addEventListener("click", function() {
    const selectedFrom = fromDestination.value;
    const selectedTo = toDestinationsInput.value;
    matchingFlights = flights.filter(function(flight) {
        return flight.from === selectedFrom
        && flight.to === selectedTo;
    })
    for(let matchingFlight of matchingFlights) {
    let div = document.createElement("p");
    const test = document.querySelector(".test");
    let from = matchingFlight.from;
    let to = matchingFlight.to;
    let price = matchingFlight.price;
    let departureTime = matchingFlight.departureTime;
    let arrivalTime = matchingFlight.arrivalTime;
    let departureDate = matchingFlight.departureDate;
    div.innerHTML= `<p>Flight from ${from} to ${to}</p>
                        <p>Price £${price}</p>
                        <p>Departing at ${departureTime} on ${departureDate}</p>
                        <p>Arriving at ${arrivalTime}</p>`
    test.appendChild(div);
}
const params = new URLSearchParams();
params.set("from", selectedFrom)
})

