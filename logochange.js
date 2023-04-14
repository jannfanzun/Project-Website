const logoIcon = document.getElementById("mdc-logo");
const moonIcon = document.getElementById("icon");
if (localStorage.getItem("theme")) {
   
    if (theme === "light") {
      logoIcon.src = "images/blackmode-logo.png.png";
    } else if (theme === "dark") {
      logoIcon.src = "images/whitemode-logo.png.png";
    }
  }
  
  moonIcon.addEventListener("click", function () {
    const theme = localStorage.getItem("theme");
  
    if (theme === "dark") {
      logoIcon.src = "images/blackmode-logo.png.png";
    } else {
      logoIcon.src = "images/whitemode-logo.png.png";
    }
  });