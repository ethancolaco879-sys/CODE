  // Import the functions you need from the SDKs you need
  import { getAuth, GoogleAuthProvider, signInWithPopup, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/12.17.0/firebase-auth.js";
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.17.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.17.0/firebase-analytics.js";
import { getFirestore, collection, addDoc, onSnapshot, doc, setDoc, serverTimestamp} from "https://www.gstatic.com/firebasejs/12.17.0/firebase-firestore.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyBZzWS8uAnZW_lC6YE9ikJNel89d1l8IpU",
    authDomain: "colaconest-holidays.firebaseapp.com",
    projectId: "colaconest-holidays",
    storageBucket: "colaconest-holidays.firebasestorage.app",
    messagingSenderId: "724545113880",
    appId: "1:724545113880:web:252ccf1f677d7fa8f8986d",
    measurementId: "G-5NYX53VZPR"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const db = getFirestore(app);
  const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const signIn =
document.querySelector(".google-sign-in");


const fromDestination = document.querySelector(".booking-flights__input");

const fromContainer = document.querySelector(".booking-flights__from")

const suggestions = document.querySelector(".booking-flights__suggestions")

const  toDestinationsInput = document.querySelector(".booking-flights__input--to");

const toSuggestions = document.querySelector(".booking-flights__suggestions--to");

const toContainer = document.querySelector(".booking-flights__to");

const navbarBtn = document.querySelector(".navigation__button");

const searchBtn = document.querySelector(".booking__search-button")

const navBtn = document.querySelector(".nav__button");

const nav =document.querySelector(".nav");

const userReview = document.querySelector(".user-review");

const reviewBtn =

document.querySelector(".review-button");

let nights =  document.querySelector(".booking__nights").value;

const buildFlightRedirect =

document.querySelector(".build__flight-redirect");

const buildHotelRedirect =

document.querySelector(".build__hotel-redirect");



let user = null;

onAuthStateChanged(auth, (currentUser) => {
    if(currentUser) {
        user = currentUser;
        signIn.style.display = "none";
    }
    else {
        user = null;
    }
})

let userDepartureDate = null;


let matches = [];

let selectedFromDestIndex = -1;

let toMatches = [];

let selectedToDestIndex= -1;

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

navBtn.addEventListener("click", function() {
    nav.classList.toggle("translate-x-[-99%]")
} )

signIn.addEventListener("click", function() {
    signInWithPopup(auth, provider)
    .then((result) => {
        user = result.user;
        console.log("sign in approved")
        setDoc(doc(db, "users", user.uid), {
            email: user.email,
            displayName: user.displayName,
            createdAt: serverTimestamp()
        })
    })
})

function highlightMatch(place, typedValue) {
    const matchIndex = place.toLowerCase().indexOf(typedValue.toLowerCase())
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
        let toSuggestionContainer = document.createElement("div");
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
       return place.toLowerCase().includes(fromValue);

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

    nights = Number.parseInt(nights);
    const departDate =
document.querySelector(".booking-flights__input--from-date").value;

const departDateCalcs = new Date(departDate);

let departDateSpare = new Date(departDateCalcs);

departDateSpare.setDate(departDateSpare.getDate() + nights);

let formatted = departDateSpare.toLocaleDateString("sv-SE")


    userDepartureDate = document.querySelector(".booking-flights__input--from-date").value;
    const selectedFrom = fromDestination.value;
    const selectedTo = toDestinationsInput.value;
    if(!selectedFrom || !selectedTo || !nights) {
    alert("Please complete the form");
    return;
}
    matchingFlights = flights.filter(function(flight) {
        return flight.from === selectedFrom
        && flight.to === selectedTo
        && flight.departureDate === userDepartureDate
        && flight.returnDate === formatted;
    })

const params = new URLSearchParams();
params.set("matchingFlights",JSON.stringify(matchingFlights));
window.location.href = `/results/results.html?${params.toString()}`;

})

reviewBtn.addEventListener("click", function() {
let userReviewValue = userReview.value;
setDoc(doc(db, "reviews", user.uid), {
review: userReviewValue,
date: new Date().toLocaleDateString("en-GB")
})
}) 