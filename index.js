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

  modalParagraph.innerHTML = `
  <div class="modal-inner-loading">
    <img class="modal-loading-img" src="images/dnd_loading.gif" />
    <p class="modal-loading-p bold" id="modal-loading-p">Uploading your data to the dark web...</p>
</div>`;

  setTimeout(function () {
    document.getElementById(
      "modal-loading-p"
    ).textContent = `secrets sold.... the pact is made....`;
  }, 1500);

  setTimeout(function () {
    modal.textContent = `TEST`;
  }, 3000);
});
