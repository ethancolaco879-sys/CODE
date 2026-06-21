stars = document.querySelectorAll(".star");

ratingtext = document.querySelector("#rating");

const night = document.querySelector(".night");

const thx = document.querySelector(".thxx")

const rateus = document.querySelector(".rate-us");

const ratedstars = document.querySelectorAll(".goldenstarsback");

const myRevText = document.querySelector(".reviewTXT");

const testTXT = document.querySelector(".tester");

const body = document.querySelector("body");

const overlay = document.querySelector(".overlay");

const x = document.querySelector(".x");

const btn = document.querySelector(".submit");

const navbar = document.querySelector(".navbar");

const tips = document.querySelector(".tips");

const homeLink = document.querySelector(".home")

homeLink.addEventListener("click", function() {
    location.reload();
})

let hoveroff = true;

let thxForRating = false;

const opennavbar = document.querySelector(".opennavbar");

let notclicked = true;

let savedReview = "";

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
    const theTextarea = document.createElement("textarea");
    myRevText.remove();
    aCH.appendChild(theTextarea);
    theTextarea.classList.add("writeSTYLE");
    overlay.classList.add("overlayON");
    x.classList.add("xON");
    aCH.appendChild(x);
});

btn.addEventListener("click", function() {
    const reviewInput = document.querySelector(".reviewTXT") 
    const theTextarea = document.querySelector(".writeSTYLE");
    const input2class = document.querySelector(".input2class");
    const writevalue = theTextarea ? theTextarea.value : savedReview;
    testTXT.textContent = writevalue;
    myRevText.style.display = "none";
    if(reviewInput) reviewInput.style.display = "none";
    if(theTextarea) theTextarea.style.display = "none";
    if(input2class) input2class.style.display = "none";
    thxForRating = true;
    x.classList.remove("xON");
    overlay.classList.remove("overlayON");
    if(thxForRating === true) {
        night.style.display = "none";
        thx.textContent = "Thank you for your feedback";
        rateus.style.display = "none";
        myTime();
    }
    btn.style.display = "none";
});

x.addEventListener("click", function() {
    const theTextarea = document.querySelector(".writeSTYLE");
    savedReview = theTextarea.value;
    const myInput = document.createElement("input");
    theTextarea.remove();
    aCH.appendChild(myInput);
    x.remove();
    overlay.classList.remove("overlayON");
    run(myInput);
    myInput.classList.add("input2class");
});

function run(inputMy) {
    inputMy.addEventListener("click", function() {
        const theTextarea = document.createElement("textarea");
        inputMy.remove();
        aCH.appendChild(theTextarea);
        theTextarea.classList.add("writeSTYLE");
        overlay.classList.add("overlayON");
        x.classList.add("xON");
        aCH.appendChild(x);
    });
}

function ifbtnclicked(mystat) {
                    btn.addEventListener("click", function() {
         ratedstars[mystat].style.color = "rgba(255, 215, 0, 1)";
        })
}

opennavbar.addEventListener("click", ()=> {
    navbar.classList.toggle("navbaropen");
    opennavbar.classList.toggle("opennavbarclicked")
})