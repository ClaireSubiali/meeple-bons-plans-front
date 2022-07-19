window.addEventListener("scroll", function (e) {
    let header = document.querySelector("header");
    header.classList.toggle("scrollEffect", window.scrollY > 0);
  });
  