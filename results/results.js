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

                 const addToBasket =
document.querySelector(".add-to-basket-btn");
                                      addToBasket.addEventListener("click", function() {
                        localStorage.setItem("clickedFlight", JSON.stringify(matchingFlight));
                        
                            basket.push(matchingFlight);
                            console.log(basket)
                            localStorage.setItem("basketValues", JSON.stringify(basket));
                        
        
                    
                    })



}

                      if(matchingFlights.length === 0) {
                    results.innerHTML = "No results";

                    
                 }

