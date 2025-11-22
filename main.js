const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");


if (menuBtn) {
  menuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
  });
}

// const orderBtn = document.querySelectorAll(".orderBtn");
// const popupmsg = document.getElementById("popupmsg");
// const closePopup = document.getElementById("closePopup");
// const okBtn = document.getElementById("okBtn");

// // Show popup
// function showpopup(){
//   popupmsg.classList.remove("hidden");
//   popupmsg.classList.add("flex");
// }

// orderBtn2.addEventListener("click", () => {
//   popupmsg.classList.remove("hidden");
//   popupmsg.classList.add("flex");
// }); 

// orderBtn3.addEventListener("click", () => {
//   popupmsg.classList.remove("hidden");
//   popupmsg.classList.add("flex");
// });


// // Close popup
// closePopup.addEventListener("click", () => {
//   popupmsg.classList.add("hidden");
//   popupmsg.classList.remove("flex");
// });

// okBtn.addEventListener("click", () => {
//   popupmsg.classList.add("hidden");
//   popupmsg.classList.remove("flex");
// });

const orderButtons = document.querySelectorAll(".orderBtn");
const popupmsg = document.getElementById("popupmsg");
const closePopup = document.getElementById("closePopup");
const okBtn = document.getElementById("okBtn");

// Function to show popup
function showPopup() {
  popupmsg.classList.remove("hidden");
  popupmsg.classList.add("flex");
}

// Attach the same function to all buttons
orderButtons.forEach(button => {
  button.addEventListener("click", showPopup);
});

// Close popup
function hidePopup() {
  popupmsg.classList.add("hidden");
  popupmsg.classList.remove("flex");
}

closePopup.addEventListener("click", hidePopup);
okBtn.addEventListener("click", hidePopup);