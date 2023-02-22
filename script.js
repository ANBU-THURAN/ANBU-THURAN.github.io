const form = document.querySelector('#form');
const scriptURL = "https://script.google.com/macros/s/AKfycbw8G3OEpg7oDLcJ5U1hU7LWYAWVyjqayuSqwBmMQV1Mp3rRya8Y5ZDXxZbnDEhhjD-APg/exec";
form.addEventListener('submit', e => {
    e.preventDefault()
        
    console.log(form)
        
    fetch(scriptURL,{method:'POST',body: new FormData(form)})
    .then(response => {

      alert('Response submitted!');


    })
    .catch(error => console.log(error.message))
    document.getElementById("form").reset();
})


let nav = document.querySelector("nav");
let scrollBtn = document.querySelector(".scroll-button a");
console.log(scrollBtn);
let val;
document.addEventListener("DOMContentLoaded", function() {
  window.scrollTo(0, 0);
});


window.onscroll = function() {
  if(document.documentElement.scrollTop > 20){
    nav.classList.add("sticky");
    scrollBtn.style.display = "block";
  }else{
    nav.classList.remove("sticky");
    scrollBtn.style.display = "none";
  }

}

// Side NavIgation Menu JS Code
let body = document.querySelector("body");
let navBar = document.querySelector(".navbar");
let menuBtn = document.querySelector(".menu-btn");
let cancelBtn = document.querySelector(".cancel-btn");
menuBtn.onclick = function(){
  navBar.classList.add("active");
  menuBtn.style.opacity = "0";
  menuBtn.style.pointerEvents = "none";
  body.style.overflow = "hidden";
  scrollBtn.style.pointerEvents = "none";
}
cancelBtn.onclick = function(){
  navBar.classList.remove("active");
  menuBtn.style.opacity = "1";
  menuBtn.style.pointerEvents = "auto";
  body.style.overflow = "auto";
  scrollBtn.style.pointerEvents = "auto";
}

// Side Navigation Bar Close While We Click On Navigation Links
let navLinks = document.querySelectorAll(".menu li a");
for (var i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener("click" , function() {
    navBar.classList.remove("active");
    menuBtn.style.opacity = "1";
    menuBtn.style.pointerEvents = "auto";
  });
} 
