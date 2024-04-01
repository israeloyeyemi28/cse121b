//document.querySelector(".contact").addEventListener("click", showInfo());

function showInfo() {
  let element = document.getElementById("text-box");
  if (element.style.display === "none") {
    element.style.display = "block";
  } else {
    element.style.display = "none";
  }
}
showInfo();
