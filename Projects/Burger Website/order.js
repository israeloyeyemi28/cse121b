let price = 0;
document.getElementById("get-Price").addEventListener("click", function () {
  if (document.getElementById("family-pack").checked) {
    document.getElementById("price").textContent = `Total: #799.99`;
  } else if (document.getElementById("hungry-pack").checked) {
    document.getElementById("price").textContent = `Total: #599.99`;
  } else {
    document.getElementById("price").textContent = `Total:  #price`;
  }
});
