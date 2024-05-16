let nav = document.querySelector("nav");

window.addEventListener("scroll", () => {
  if (window.scrollY == 0) {
    nav.style.boxShadow = "";
  } else {
    nav.style.boxShadow = "0 10px 10px -10px #777";
  }
});

// scroll reveal
ScrollReveal({
  //reset: true,
  distance: "80px",
  duration: 2000,
});

ScrollReveal().reveal(".main-area, .resume", { origin: "top" });
