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
    let flight = document.createElement("div");


    
        flight.innerHTML = `<p>${from}<i class="fa-solid fa-plane"></i>${to}</p>
                 <p>£${price}</p>
                 <p>Departing at ${departureTime} on ${departureDate}</p>
                 `
                 results.appendChild(flight);
                 flight.classList.add("detailsHolder");



}

                      if(matchingFlights.length === 0) {
                    results.innerHTML = "No results";
                 }