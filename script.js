// ================= MENU =================

const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector("nav");

menuBtn.addEventListener("click", () => {
  nav.classList.toggle("open");
});

document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
  });
});


// ================= GOOGLE DRIVE LINKS =================

const photosDrive =
  "https://drive.google.com/drive/folders/1YhwOkVznY1lHvtUZ_h38IKydxIU7RMKm";

const videosDrive =
  "https://drive.google.com/drive/folders/1iF8pER_FCew_Yb2elCRfRxjwLg6EEVgp";


// ================= PHOTO GALLERY =================

document.getElementById("galleryBtn").addEventListener("click", () => {

  window.open(
    photosDrive,
    "_blank",
    "noopener,noreferrer"
  );

});


// ================= VIDEO FOLDER =================

document.getElementById("videoBtn").addEventListener("click", () => {

  window.open(
    videosDrive,
    "_blank",
    "noopener,noreferrer"
  );

});


// ================= VIDEO PLAY BUTTONS =================

document.getElementById("videoPlay1").addEventListener("click", () => {

  window.open(
    videosDrive,
    "_blank",
    "noopener,noreferrer"
  );

});

document.getElementById("videoPlay2").addEventListener("click", () => {

  window.open(
    videosDrive,
    "_blank",
    "noopener,noreferrer"
  );

});

document.getElementById("videoPlay3").addEventListener("click", () => {

  window.open(
    videosDrive,
    "_blank",
    "noopener,noreferrer"
  );

});


// ================= MAP =================

const mapBtn = document.getElementById("mapBtn");

mapBtn.addEventListener("click", () => {

  window.open(
    "https://maps.app.goo.gl/sgbPYmF1Uf6L7pu37",
    "_blank",
    "noopener,noreferrer"
  );

});
