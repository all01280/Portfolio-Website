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
  duration: 1500,
});

ScrollReveal().reveal(".main-area, .resume, #about_card", { origin: "top" });

// 點擊Card header後 拉窗簾的動畫

let About_body = $("#About_body");
let About_header = $("#About_header");
let zoom_in = $("#zoom_in");
let zoom_out = $("#zoom_out");

let About_body2 = $("#About_body2");
let About_header2 = $("#About_header2");
let zoom_in2 = $("#zoom_in2");
let zoom_out2 = $("#zoom_out2");

let About_body3 = $("#About_body3");
let About_header3 = $("#About_header3");
let zoom_in3 = $("#zoom_in3");
let zoom_out3 = $("#zoom_out3");

About_header.click(function () {
  About_body.slideToggle(200);
  zoom_in.toggle();
  zoom_out.toggle();
});

About_header2.click(function () {
  About_body2.slideToggle(200);
  zoom_in2.toggle();
  zoom_out2.toggle();
});

About_header3.click(function () {
  About_body3.slideToggle(200);
  zoom_in3.toggle();
  zoom_out3.toggle();
});
