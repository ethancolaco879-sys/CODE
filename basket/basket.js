import {db} from '../firebase.js'
import {auth} from '../firebase.js';
  import { getAuth, GoogleAuthProvider, signInWithPopup, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/12.17.0/firebase-auth.js";
import { getFirestore, collection, addDoc, onSnapshot, doc, setDoc, serverTimestamp} from "https://www.gstatic.com/firebasejs/12.17.0/firebase-firestore.js";

const addedFlightsHolder =document.querySelector(".added-flights-holder");

let basket = [];


let currentUser = null;
onAuthStateChanged(auth, (user) => {
    if(user) {
        currentUser = user;
        console.log("signed in!")
            onSnapshot(doc(db, "basket", user.uid), (snapshot) => {
        basket = snapshot.data().selectedFlight;
    displayFlights()

    })
    }
    else{
    basket = JSON.parse(localStorage.getItem("basketValues")) || [];
    displayFlights()
}


})


function displayFlights() {
    addedFlightsHolder.innerHTML = "";
    for(let savedFlight of basket) {
    let flight = document.createElement("div");
    flight.classList.add("savedFlight")
    let from = savedFlight.from;
let to = savedFlight.to;
let price = savedFlight.price;
let departureTime = savedFlight.departureTime;
let departureDate = savedFlight.departureDate;
let arrivalTime = savedFlight.arrivalTime;
let returnDate = savedFlight.returnDate;
 flight.innerHTML = `<p>${from} <i class="fa-solid fa-plane"></i>${to}</p>
                 <p>£${price} <i class="fa-solid fa-coins"></i></p>
                 <p>Departing at ${departureTime} on ${departureDate} <i class="fa-solid fa-calendar"></i></p>
                 <p>Returning On ${returnDate} <i class="fa-solid fa-calendar"></i> </p>`;
                 addedFlightsHolder.append(flight)
                 console.log(flight)
}

}


