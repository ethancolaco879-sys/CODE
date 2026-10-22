import {db} from '../firebase.js'
import {auth} from '../firebase.js';
  import { getAuth, GoogleAuthProvider, signInWithPopup, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/12.17.0/firebase-auth.js";
import { doc, setDoc, arrayUnion } from "https://www.gstatic.com/firebasejs/12.17.0/firebase-firestore.js";
const urlParams = new URLSearchParams(window.location.search);

const matchingFlights = JSON.parse(urlParams.get("matchingFlights"));

    const results = document.querySelector(".results");

let basket = JSON.parse(localStorage.getItem("basketValues")) || [];

const basketLink =
document.querySelector(".basket-icon");

basketLink.addEventListener("click", function() {
    window.location.href = "/basket/basket.html";
})

for(let matchingFlight of matchingFlights) {
    let from = matchingFlight.from;
    let to = matchingFlight.to;
    let price = matchingFlight.price;
    let departureTime = matchingFlight.departureTime;
    let departureDate = matchingFlight.departureDate;
    let arrivalTime = matchingFlight.arrivalTime;
    let returnDate = matchingFlight.returnDate;
    let flight = document.createElement("div");
    flight.classList.add("flight");
   
    
        flight.innerHTML = `<p>${from} <i class="fa-solid fa-plane"></i> ${to}</p>
                 <p>£${price} <i class="fa-solid fa-coins"></i></p>
                 <p>Departing at ${departureTime} on ${departureDate} <i class="fa-solid fa-calendar"></i></p>
                 <p>Returning On ${returnDate} <i class="fa-solid fa-calendar"></i></p>
                 <button class="add-to-basket-btn">Add to basket <i class="fa-solid fa-plus"></i></button>
                 `
                 results.appendChild(flight);
                 flight.classList.add("detailsHolder");

                 let addToBasket =
flight.querySelector(".add-to-basket-btn");
                                      addToBasket.addEventListener("click", function() {
                                        let tick = document.createElement("p");
                                        tick.innerHTML = `Added To basket <i class="fa-solid fa-check"></i>`
                                        addToBasket.replaceWith(tick) 
                                        console.log("clicked");
                                        let user = auth.currentUser;
                                        
                                    if(!user) {
                                                                                                            localStorage.setItem("clickedFlight", JSON.stringify(matchingFlight));
                        
                            basket.push(matchingFlight);
                            console.log(basket)
                            localStorage.setItem("basketValues", JSON.stringify(basket));
                            console.log("not signed in") //For testing purposes only; remove before launch
                                    }
                                    else {
                                        setDoc(doc(db, "basket", user.uid), {
                                            selectedFlight: arrayUnion(matchingFlight)
                                        }, {merge: true})
                                        basket.push(matchingFlight);
                                        console.log("signed in") //For testing purposes only; remove before launch 
                                    }

                            
                                     })   

                        
        
                    
                   } 





                      if(matchingFlights.length === 0) {
                    results.innerHTML = "No results";

                    
                 }

