const stars = document.querySelectorAll(".star");

const ratingtext = document.querySelector("#rating");

const night = document.querySelector(".night");

const thx = document.querySelector(".thxx")

const rateus = document.querySelector(".rate-us");

const ratedstars = document.querySelectorAll(".goldenstarsback");

const myRevText = document.querySelector(".reviewTXT");

const testTXT = document.querySelector(".tester");

const body = document.querySelector("body");

const overlay = document.querySelector(".overlay");

const x = document.querySelector(".x");

const btn = document.querySelector(".submit-rating__button");

const navbar = document.querySelector(".navbar");

const tips = document.querySelector(".tips");

const textarea = document.querySelector(".textarea-container__textarea");

const homeLink = document.querySelector(".home")

homeLink.addEventListener("click", function() {
    location.reload();
})

let hoveroff = true;

let thxForRating = false;

const opennavbar = document.querySelector(".opennavbar");

let notclicked = true;





tips.addEventListener("click", () => {
    window.location.href = "tipscode/tips.html";
})

function activefalsehover() {
    notclicked = false;
}

stars.forEach(function(eachstar, index){

eachstar.addEventListener("mouseout", function() {
    stars.forEach(function(eachstar) {
        if(notclicked === true) {
        eachstar.style.color = "rgba(0, 0, 0, 0.3)";
        }
    })
});

eachstar.addEventListener("click", function() {
    ratingtext.style.display = "none";
    myindex = index + 1;
    for(let mystat = 0; mystat <= index; mystat = mystat + 1) {
        stars[mystat].style.color = "rgba(255, 215, 0, 1)";
        ifbtnclicked(mystat);
    }
    activefalsehover();
});

    eachstar.addEventListener("mouseover", function() {
        if(notclicked === true) {
            for(let mystat = 0; mystat <= index; mystat = mystat + 1){
                stars[mystat].style.color = "rgba(255, 215, 0, 0.4)";
            }
        }
    });
});

function myTime() {
    setTimeout(function() {
        thx.style.display = "none";
    }, 3000);
}

const aCH = document.querySelector(".aCH");

myRevText.addEventListener("click", function() {
    x.classList.add("x--shown")
    console.log("clicked");
    console.log(x.className);
    textarea.classList.add("textarea--shown");
    myRevText.classList.add("myRevText--deleted"); //my rev text is the input
    overlay.classList.add("overlayON"); //overlay on is when the grey overlay is shown
    
});


x.addEventListener("click", ()=> {
    textarea.classList.remove("textarea--shown"); //hides the textarea, and deletes the class showing it
    myRevText.classList.remove("myRevText--deleted"); //shows the input, and deletes the class hiding it
    x.classList.remove("x--shown");
    overlay.classList.remove("overlayON");
})

btn.addEventListener("click", function() {
    thxForRating = true;
    if(thxForRating) {
        night.style.display = "none";
        thx.textContent = "Thank you for your feedback";
        rateus.style.display = "none";
        myTime();
    }
    btn.style.display = "none";
    testTXT.textContent = textarea.value;
textarea.classList.remove("textarea--shown");//deletes text area, if it exists
 myRevText.classList.add("myRevText--deleted")//deletes input
});


function ifbtnclicked(mystat) {
                    btn.addEventListener("click", function() {
         ratedstars[mystat].style.color = "rgba(255, 215, 0, 1)";
        })
}

opennavbar.addEventListener("click", ()=> {
    navbar.classList.toggle("navbaropen");
    opennavbar.classList.toggle("opennavbarclicked")
})