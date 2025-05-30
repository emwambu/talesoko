// app.js

window.toggleAuthModal = function () {
  document.getElementById("auth-modal").style.display = "flex";
};

window.closeAuthModal = function () {
  document.getElementById("auth-modal").style.display = "none";
};

window.onclick = function (event) {
  const modal = document.getElementById("auth-modal");
  if (event.target === modal) {
    modal.style.display = "none";
  }
};
