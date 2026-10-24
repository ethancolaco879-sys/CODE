import {db} from '../firebase.js'
import {auth} from '../firebase.js';

  import { getAuth, GoogleAuthProvider, signInWithPopup, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/12.17.0/firebase-auth.js";
import {updateDoc, arrayUnion, deleteDoc, getFirestore, collection, addDoc, onSnapshot, doc, setDoc, serverTimestamp} from "https://www.gstatic.com/firebasejs/12.17.0/firebase-firestore.js";

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
    basket.forEach( (savedFlight, index) => {
    let flight = document.createElement("div");
    flight.classList.add("savedFlight")
    let from = savedFlight.from;
let to = savedFlight.to;
let price = savedFlight.price;
let departureTime = savedFlight.departureTime;
let departureDate = savedFlight.departureDate;
let arrivalTime = savedFlight.arrivalTime;
let returnDate = savedFlight.returnDate;
 flight.innerHTML = `
                 <p>${from} <i class="fa-solid fa-plane"></i> ${to}</p>
                 <p>£${price} <i class="fa-solid fa-coins"></i></p>
                 <p>Departing at ${departureTime} on ${departureDate} <i class="fa-solid fa-calendar"></i></p>
                 <p>Returning On ${returnDate} <i class="fa-solid fa-calendar"></i> </p>
                 <div class="flight-footer">
                                     <span class="favorite">
            <i class="fa-regular fa-heart icon-off"></i>
            <i class="fa-solid fa-heart icon-on fa-wag"></i>
        </span>
                 <span class="remove"><i class="fa-solid fa-trash "></i></span>

                 </div>
                  `;
               let remove = flight.querySelector(".remove");
               let favorite = flight.querySelector(".favorite");
               let heart = flight.querySelector(".heart");

               favorite.addEventListener("click", function() {
                favorite.classList.toggle("active-heart")
               })


                  remove.addEventListener("click", async function() {
                    console.log("click event works")
                    if(currentUser) {
                             try{
                               let updated = basket.filter((_, i) => i !== index)
                    updateDoc(doc(db, "basket", currentUser.uid), {
                        selectedFlight: updated
                    })   
                             }  

                             catch(error) {
                                console.log("Deleting item from basket failed. Error code:", error)
                             }
                    }
                    else {
                        console.log("not signed in");
                        basket.splice(index, 1);
                        localStorage.setItem("basketValues", JSON.stringify(basket));
                        displayFlights()
                    }
                  })
                 addedFlightsHolder.append(flight)



}) //forEach 
} //DisplayFlights


