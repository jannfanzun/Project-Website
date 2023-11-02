const logoIcon = document.getElementById("mdc-logo");

if (localStorage.getItem("theme")) {
    const theme = localStorage.getItem("theme");
    if (theme === "light") {
      logoIcon.src = "images/mdclogo.svg";
    } else if (theme === "dark") {
      logoIcon.src = "images/mdclogowhite.svg";
    }
  }
  
  moonIcon.addEventListener("click", function () {
    const theme = localStorage.getItem("theme");
  
    if (theme === "dark") {
      
      logoIcon.src = "images/mdclogowhite.svg";
    } else {
        logoIcon.src = "images/mdclogo.svg";
    }
  });   