const firstContainer = document.querySelector(".first-container");

const secondContainer = document.querySelector(".second-container");

const submitButton = document.getElementById("submit");

const rateAgainButton = document.getElementById("rate-again");

const rating = document.getElementById("rating");
 
const allthose5buttons = document.querySelectorAll(".regular-button");
// loop through these buttons and 
allthose5buttons.forEach((buttoni)=> {
  buttoni.addEventListener("click", ()=>{
    rating.innerHTML = buttoni.innerHTML;
  })
})
submitButton.addEventListener("click" , () => {
  secondContainer.classList.remove("hidden");
  firstContainer.style.display="none";
})

rateAgainButton.addEventListener("click" , ()=> {
  secondContainer.classList.add("hidden");
  firstContainer.style.display="block";
})

