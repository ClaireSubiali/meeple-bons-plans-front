window.addEventListener("scroll", function (e) {
    let header = document.querySelector("header");
    header.classList.toggle("scrollEffect", window.scrollY > 0);
  });
  

  window.addEventListener("scroll", function (e) {
    let footer = document.querySelector("footer");
    footer.classList.toggle("scrollEffect", window.scrollY > 0);
  });