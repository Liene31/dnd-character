const modal = document.getElementById("modal");
const modalCloseBtn = document.getElementById("modal-close-btn");
const modalForm = document.getElementById("modal-form");
const acceptBtn = document.getElementById("accept-btn");
const modalParagraph = document.getElementById("modal-p");

// Currently with cusrsor NOT ALLOWED still can close the window
// Need to change the cursor to pointer when allowed to close

setTimeout(function () {
  modal.style.display = "inline";
}, 1500);

modalCloseBtn.addEventListener("click", function () {
  modal.style.display = "none";
});

modalForm.addEventListener("submit", function (event) {
  event.preventDefault();

  // not working correctly
  modalParagraph.textContent = "Hello";
});
