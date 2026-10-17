const urlParams = new URLSearchParams(window.location.search);

const matchingFlights = JSON.parse(urlParams.get("matchingFlights"));

    const results = document.querySelector(".results");

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
                        flight.addEventListener("click", function() {
                        localStorage.setItem("clickedFlight", JSON.stringify(matchingFlight));
                        let clickedFlight = localStorage.getItem("clickedFlight")
                        console.log(clickedFlight)
                    })
    
        flight.innerHTML = `<p>${from}<i class="fa-solid fa-plane"></i>${to}</p>
                 <p>£${price}<i class="fa-solid fa-coins"></i></p>
                 <p>Departing at ${departureTime} on ${departureDate}<i class="fa-solid fa-calendar"></i></p>
                 <p>Returning On ${returnDate}<i class="fa-solid fa-calendar"></i></p>
                 `
                 results.appendChild(flight);
                 flight.classList.add("detailsHolder");



}

                      if(matchingFlights.length === 0) {
                    results.innerHTML = "No results";

                    
                 }