// const loremIpsum = document.getElementById("lorem-ipsum");
// fetch("https://baconipsum.com/api/?type=all-meat&paras=200&format=html")
//   .then((response) => response.text())
//   .then((result) => (loremIpsum.innerHTML = result));
// const modal = document.getElementById("modal");
// function modalOn() {
//   modal.style.display = "flex";
// }
// function isModalOn() {
//   return modal.style.display === "flex";
// }
// function modalOff() {
//   modal.style.display = "none";
// }
// const btnModal = document.getElementById("btn-modal");
// btnModal.addEventListener("click", (e) => {
//   modalOn();
// });
// const closeBtn = modal.querySelector(".close-area");
// closeBtn.addEventListener("click", (e) => {
//   modalOff();
// });
// modal.addEventListener("click", (e) => {
//   const evTarget = e.target;
//   if (evTarget.classList.contains("modal-overlay")) {
//     modalOff();
//   }
// });
// window.addEventListener("keyup", (e) => {
//   if (isModalOn() && e.key === "Escape") {
//     modalOff();
//   }
// });
const body = document.querySelector("body");
const modal = document.querySelector(".modal");
const btnOpenPopup = document.querySelector(".btn-open-popup");

btnOpenPopup.addEventListener("click", () => {
  modal.classList.toggle("show");

  if (modal.classList.contains("show")) {
    body.style.overflow = "hidden";
  }
});

modal.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.classList.toggle("show");

    if (!modal.classList.contains("show")) {
      body.style.overflow = "auto";
    }
  }
});
