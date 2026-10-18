const addedFlightsHolder =document.querySelector(".added-flights-holder");

let basket = JSON.parse(localStorage.getItem("basketValues"));

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



