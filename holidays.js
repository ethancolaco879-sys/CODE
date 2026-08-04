  // Import the functions you need from the SDKs you need
  import { getAuth, GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/12.17.0/firebase-auth.js";
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.17.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.17.0/firebase-analytics.js";
import { getFirestore, collection, addDoc, onSnapshot, doc, setDoc } from "https://www.gstatic.com/firebasejs/12.17.0/firebase-firestore.js";
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

let myIndex = 0;

const stars = document.querySelectorAll(".star");

const ratingtext = document.querySelector("#rating");

const night = document.querySelector(".night");

const thx = document.querySelector(".thxx")

const rateus = document.querySelector(".rate-us");

const myRevText = document.querySelector(".reviewTXT");

const reviewContainer = document.querySelector(".review-container");

const body = document.querySelector("body");

const overlay = document.querySelector(".overlay");

const x = document.querySelector(".x");

const submitRatingBtn = document.querySelector(".submit-rating__button");

const navbar = document.querySelector(".navbar");

const tips = document.querySelector(".tips");

const textarea = document.querySelector(".textarea-container__textarea");

const homeLink = document.querySelector(".home")

const googleSignIn = document.querySelector(".google-signin");

homeLink.addEventListener("click", function() {
    location.reload();
})

let hoveroff = true;

let thxForRating = false;

const opennavbar = document.querySelector(".opennavbar");

let notclicked = true;

googleSignIn.addEventListener("click", function() {
    signInWithPopup(auth, provider)
    .then((result) => {
        console.log("Signed in!");
        const user = result.user;
        setDoc ( doc(db, "users", user.uid), {
            email: user.email,
            displayName: user.displayName,
            createdAt: new Date().toLocaleDateString('en-GB')
        })
    }) 
})

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
    myIndex = index + 1;
    for(let mystat = 0; mystat <= index; mystat++) {
        stars[mystat].style.color = "rgba(255, 215, 0, 1)";
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

submitRatingBtn.addEventListener("click", function() {
    thxForRating = true;
    if(thxForRating) {
        night.style.display = "none";
        thx.textContent = "Thank you for your feedback";
        rateus.style.display = "none";
        myTime();
    }
    submitRatingBtn.style.display = "none";
textarea.classList.remove("textarea--shown");//deletes text area, if it exists
 myRevText.classList.add("myRevText--deleted")//deletes input

 addDoc(collection(db, "reviews"), { //add doc just adds a document to where you state to to add it
    stars: myIndex,
    text: textarea.value,
    createdAt: new Date().toLocaleDateString('en-GB')
 });

 

});



opennavbar.addEventListener("click", ()=> {
    navbar.classList.toggle("navbaropen");
    opennavbar.classList.toggle("opennavbarclicked")
})

onSnapshot(collection(db, "reviews"), (snapshot) => { //on snap shot just gets the stuff from where you tell it to look
    reviewContainer.innerHTML = "";
    snapshot.docs.slice(0, 3).forEach((doc) => {
        const reviewEl = document.createElement("div");
        const review = doc.data();
        reviewContainer.appendChild(reviewEl);
        reviewEl.classList.add("review");
        const reviewStarsContainer = document.createElement("div"); // container for the review stars
        reviewEl.appendChild(reviewStarsContainer);
        const allStars = []; // the array to run the loop on to show the highlighted stars
        for(let i = 0; i < 5; i++) {
            const reviewStar = document.createElement("p");
            reviewStar.innerHTML = "&#9733;";
            reviewStarsContainer.appendChild(reviewStar);
                    allStars.push(reviewStar);
                            reviewStar.classList.add("review__star"); //stars class
        }
        for(let starsRated = 0; starsRated < review.stars; starsRated++) {
            allStars[starsRated].style.color = "rgba(255, 215, 0, 1)";
        }
        const reviewText = document.createElement("p");
        reviewEl.appendChild(reviewText);
        reviewText.textContent = review.text;
        const reviewCreatedAtDate = document.createElement("p");
        reviewEl.appendChild(reviewCreatedAtDate);
        reviewCreatedAtDate.textContent = review.createdAt;
        //CLASSES
        reviewStarsContainer.classList.add("review__stars"); //stars container class
        reviewText.classList.add("review__text");
        reviewCreatedAtDate.classList.add("review__created-at");

        //reviewEl.textContent = ` ${review.text} CREATED AT: ${review.createdAt}`
    })
})

// NOTES

//basically we should have a div which is reviewEl containing each of the parts: the review text; the created at text and the rated stars. We should ensure each of these have their own p tags