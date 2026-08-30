const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector("nav");

menuBtn.addEventListener("click", () => nav.classList.toggle("open"));
document.querySelectorAll("nav a").forEach(a => a.addEventListener("click", () => nav.classList.remove("open")));

document.getElementById("mapBtn").addEventListener("click", e => {
  e.preventDefault();
  alert("https://maps.app.goo.gl/sgbPYmF1Uf6L7pu37");
});

document.getElementById("galleryBtn").addEventListener("click", () => {
  alert("Next step: we'll connect your real photos here.");
});

document.getElementById("videoBtn").addEventListener("click", () => {
  alert("Next step: we'll connect your real videos here.");
});
