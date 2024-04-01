// copyright year
document.querySelector("#year").textContent = new Date().getFullYear();
// document.querySelector("year").textContent = new Date().getHours();

// toggle menu in small view
const toggleMenu = () => {
  document.querySelector("#menu").classList.toggle("open");
};

document.querySelector("#toggleMenu").addEventListener("click", toggleMenu);
