const modal = document.getElementById("modal");
const modalCloseBtn = document.getElementById("modal-close-btn");
const modalForm = document.getElementById("modal-form");
// const acceptBtn = document.getElementById("accept-btn");
const modalParagraph = document.getElementById("modal-p");
const modalInner = document.getElementById("modal-inner");

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

  const userFormData = new FormData(modalForm);
  const userName = userFormData.get("fullName");

  modalParagraph.innerHTML = `
  <div class="modal-inner-loading">
    <img class="modal-loading-img" src="images/dnd_loading.gif" />
    <p class="modal-loading-p bold" id="modal-loading-p">Uploading your data to the dark web...</p>
</div>`;

  setTimeout(function () {
    document.getElementById(
      "modal-loading-p"
    ).textContent = `secrets sold.... the pact is made....`;
  }, 1800);

  setTimeout(function () {
    modalInner.innerHTML = `
      <h2 class="modal-header">Thanks <span class="bold color-white">${userName}</span>, you sucker!</h2>
      <p class="modal-p">
        May the gods bless your ignorance. Your soul has been sold.<br> </br>
        Think of it as a transfer of ownership — you still get to use your soul… but we decide how.
      </p>
      <img class="devil-laughing-gif" src="images/devil-laughing.gif" />
          `;

    modalCloseBtn.disabled = false;
  }, 4000);
});
