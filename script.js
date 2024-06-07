// select nav trigger btn
const navTrigger = document.querySelector("#navTrigger")

// select navigation
const nav = document.querySelector('#nav');

// Select the nav close btn
const navCloseBtn = document.querySelector("#navCloseBtn");

// Select header
const header = document.querySelector('#header');


// add a click event listener to the nav trigger btn
navTrigger.addEventListener("click", () => {
  // Añade la clase "is-open" que cambia right: 0 -> muestra el nav mobile
  nav.classList.toggle("is-open")
})

// add a click event listener to the nav close btn
navCloseBtn.addEventListener("click", () => {
  // Borra la clase "is-open" que cambia right: 0 -> cierra el nav mobile
  nav.classList.remove("is-open")
})

//add a scroll event listener to the window
window.addEventListener('scroll', () => {
  //get the current vertical position
  const scrollY = window.scrollY;

  //add or remove the active class from the header based on the scroll position
  scrollY > 50
    ? header.classList.add("is-active")
    : header.classList.remove("is-active")

})
