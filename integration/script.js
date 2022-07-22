window.addEventListener("scroll", function (e) {
    let header = document.querySelector("header");
    header.classNameList.toggle("scrollEffect", window.scrollY > 0);
  });
  

  window.addEventListener("scroll", function (e) {
    let footer = document.querySelector("footer");
    footer.classNameList.toggle("scrollEffect", window.scrollY > 0);
  });


  function openForm() {
    document.getElementById("popupForm").style.display = "block";
  }

  function closeForm() {
    document.getElementById("popupForm").style.display = "none";
  }
