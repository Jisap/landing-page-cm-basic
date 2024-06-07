// select nav trigger btn
const navTrigger = document.querySelector("#navTrigger")

// select navigation
const nav = document.querySelector('#nav');

// Select the nav close btn
const navCloseBtn = document.querySelector("#navCloseBtn");


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
