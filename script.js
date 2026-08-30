const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector("nav");

menuBtn.addEventListener("click", () => nav.classList.toggle("open"));
document.querySelectorAll("nav a").forEach(a => a.addEventListener("click", () => nav.classList.remove("open")));

document.getElementById("mapBtn").addEventListener("click", e => {
  e.preventDefault();
  alert("Replace this button with your Google Maps location link.");
});

document.getElementById("galleryBtn").addEventListener("click", () => {
  alert("Next step: we'll connect your real photos here.");
});

document.getElementById("videoBtn").addEventListener("click", () => {
  alert("Next step: we'll connect your real videos here.");
});